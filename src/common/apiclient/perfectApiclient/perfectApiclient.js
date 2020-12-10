/**created by ZhangY on 2020/6/8
 *@desc learned from Geodo
 */
import axios from "axios";
import Vue from "vue"
import qs from "query-string"
import store from "@/store"
import router from "@/router"

import {
    SUCCESS, REQUEST_FAIL, URL_NULL, NO_AUTH
} from "./retCode"
import {BASE_URL, PORTAL_URL,} from "./bsePath"

const {CancelToken} = axios;

class ApiClient {
    static instance;

    static getInstance() {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance
    }

    static getConfig(token) {
        return {
            timeout: 60000,
            cancelToken: token,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-Width': 'XMLHttpRequest',
            },
            withCredentials: true,
        }
    }

    constructor() {
        if (ApiClient.instance) {
            throw new Error('Cant initialize instance of singleton')
        }
        this.reset()
    }

    reset() {
        this.source = CancelToken.source();
        this.$http = axios.create(ApiClient.getConfig(this.source.token));
        ApiClient.setResponseInterceptor(this.$http);
        this.$http.interceptors.request.use(config => {
            const cookie = qs.parse(document.cookie.split(/\s*;\s*/).join('&'));
            config.headers['x-cookie'] = cookie['x-cookie'] || '';
            if (config.contentType === 'form-urlencoded') {
                config.headers['Content-Type'] = 'application/x-www.form-urlencoded'
            }
            return config
        }, error => {
            return Promise.reject(error)
        })
    }

    request({
                url,
                data = {},
                params,
                options = {},
                type = "post",
                showError = false,
                showLoading = false,
                specialCode,
                ping = false,
            }) {
        if (showLoading) {
            store.commit('setVars', {isLoading: true})
        }
        return new Promise((resolve, reject) => {
            if (!url) {
                reject({
                    responseCode: URL_NULL,
                    responseMsg: '请求地址未定义',

                });
                if (showLoading) {
                    store.commit('setVars', {isLoading: false})
                }
                if (showError) {
                    Vue.prototype.$message.error("地址未定义")
                }
                return
            }
            if (url.indexOf(PORTAL_URL) > -1) {

            } else {
                url = BASE_URL + url
            }
            const requestMethod = type.toLocaleLowerCase();
            const shouldInjectData = ['post', 'put', 'patch'].indexOf(requestMethod) > -1;
            const requestConfig = {
                ...options,
                params,
            };
            const requestRest = shouldInjectData ? [url, data, requestConfig] : [url, requestConfig]
            const promise = this.$http[requestMethod](...requestRest)
            promise.then(response => {
                if (ping) {
                    resolve();
                    return
                }
                if (showLoading) {
                    store.commit('setVars', {isLoading: false})
                }
                if (!!response) {
                    if (response.hasOwnProperty('responseCode')) {
                        const {responseCode, responseMsg} = response
                        if (responseCode === SUCCESS) {
                            resolve(response);
                            return;
                        }
                        if (responseCode !== SUCCESS) {
                            reject(response);
                            if (responseCode === NO_AUTH) {
                                router.push({path: '/login', query: {forced: true}})
                                    .catch(e => console.log(e))
                            }
                            if (showError && responseCode !== specialCode) {
                                Vue.prototype.$message.error(`code:${responseCode} msg:${responseMsg}`)
                            }
                        }
                    } else if (response.hasOwnProperty('success')) {
                        const {success, } = response;
                        if (success === true || success === false) {
                            resolve(response);
                            return;
                        } else {
                            reject({
                                responseCode: REQUEST_FAIL,
                                responseMsg: '服务器异常'
                            });
                            if (showError) {
                                Vue.prototype.$message.error('服务器异常')
                            }
                        }
                    } else {
                        resolve(response)
                    }
                } else {
                    reject({
                        responseCode: REQUEST_FAIL,
                        responseMsg: '服务器异常'
                    });
                    if (showError) {
                        Vue.prototype.$message.error('服务器异常')
                    }
                }
            }, error => {
                if (axios.isCancel(error)) {
                    return
                }
                if (showLoading) {
                    store.commit('setVars', {isLoading: false})
                }
                reject({
                    responseCode: REQUEST_FAIL,
                    responseMsg: '请求错误'
                });
                if (showError) {
                    Vue.prototype.$message.error('请求错误')
                }
            })
        })
    }

    abortAll() {
        this.source.cancel('Abort all');
        this.reset()
    }

    static setResponseInterceptor($http) {
        $http.interceptors.response.use(response => response.data)
    }
}

const apiClient = ApiClient.getInstance();
export const post = (url, data, moreOptions,) => apiClient.request({url, data, type: 'post', ...moreOptions});
export const get = (url, data, moreOptions,) => apiClient.request({url, data, type: 'get', ...moreOptions});

export default apiClient;
















