import axios from 'axios'
import Vue from 'vue'
import qs from 'query-string'
import store from '@/store'
import { SUCCESS, REQUEST_FAIL, URL_NULL, NO_AUTH } from '@/common/constant/retCode'
import { BASE_URL, PROTAL_URL } from '@/common/constant/basePath'

/**
 * @param timeout 请求超时时限
 * @param baseURL 请求根地址
 * @param interceptors.request 请求拦截
 * @param interceptors.response
 * 响应拦截
 */

const { CancelToken } = axios

class ApiClient {
  static instance

  static getInstance () {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  static getConfig (token) {
    return {
      timeout: 60000,
      cancelToken: token,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials: true,
    }
  }

  constructor() {
    // 单例限制
    if (ApiClient.instance) {
      throw new Error('Cant initialize instance of singleton.')
    }
    this.reset()
  }

  reset () {
    this.source = CancelToken.source()
    this.$http = axios.create(ApiClient.getConfig(this.source.token))
    ApiClient.setResponseInterceptor(this.$http)
    // 请求拦截
    this.$http.interceptors.request.use(config => {
      const cookie = qs.parse(document.cookie.split(/\s*;\s*/).join('&'))
      config.headers['x-cookie'] = cookie['x-cookie'] || ''
      return config
    }, error => {
      // 增加错误消息提示
      return Promise.reject(error)
    })
  }

  request ({
    url,
    data = {},
    params,
    options = {},
    type = 'post',
    showError = true,
    showLoading = false,
    specialCode,
    ping = false, // ping 模式, 忽略结果
  }) {
    if (showLoading) {
      store.commit('setVars', { isLoading: true })
    }
    return new Promise((resolve, reject) => {
      if (!url) {
        reject({
          responseCode: URL_NULL,
          responseMsg: '请求地址未定义',
        })
        if (showLoading) {
          store.commit('setVars', { isLoading: false })
        }
        if (showError) {
          Vue.prototype.$message.error('地址未定义')
        }
        return
      }
      if (url.indexOf(PROTAL_URL) > -1) {
        // discard
      } else {
        url = BASE_URL + url
      }
      const requestMethod = type.toLowerCase()
      const shouldInjectData = ['post', 'put', 'patch'].indexOf(requestMethod) > -1
      const requestConfig = {
        ...options,
        params,
      }
      const requestRest = shouldInjectData ? [url, data, requestConfig] : [url, requestConfig]
      const promise = this.$http[requestMethod](...requestRest)
      promise.then((response) => {
        if (ping) {
          resolve()
          return
        }
        const { responseCode, responseMsg } = response
        if (showLoading) {
          store.commit('setVars', { isLoading: false })
        }
        if (responseCode === SUCCESS) {
          resolve(response)
          return
        }
        // 其他的错误拦截提示,下面暂时这么定义，后面根据情况修改
        if (responseCode !== SUCCESS) {
          reject(response)
          if (responseCode === NO_AUTH && response.data) {
            const [href, search] = response.data.split('?')
            if (search) {
              const query = qs.parse(decodeURIComponent(search))
              query.redirectUrl += window.location.hash
              window.location.href = [href, qs.stringify(query)].join('?')
            } else {
              window.location.href = response.data
            }
          }
          if (showError && responseCode !== specialCode) {
            Vue.prototype.$message.error(`code: ${responseCode} msg: ${responseMsg}`)
          }
        }
      },
        (error) => {
          if (axios.isCancel(error)) {
            return
          }
          if (showLoading) {
            store.commit('setVars', { isLoading: false })
          }
          reject({
            responseCode: REQUEST_FAIL,
            responseMsg: '请求错误',
          })
          if (showError) {
            Vue.prototype.$message.error('请求错误')
          }
        })
    })
  }

  /**
   * 取消所有请求
   */
  abortAll () {
    this.source.cancel('Abort all')
    this.reset()
  }

  /**
   * response interceptors
   * @param {axiosInstance} $http - axios instance
   */
  static setResponseInterceptor ($http) {
    $http.interceptors.response.use(response => response.data)
  }
}

const apiClient = ApiClient.getInstance()

export const post = (url, data, moreOptions) => apiClient.request({
  url,
  data,
  type: 'post',
  ...moreOptions,
})

export const get = (url, params, moreOptions) => apiClient.request({
  url,
  params,
  type: 'get',
  ...moreOptions,
})

export default apiClient
