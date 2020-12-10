import apiClient from "@/common/apiclient/perfectApiclient/perfectApiclient";

export function _getAllCard(params) {
    return apiClient.request({
        url: '/api/site/his/getAllCard',
        type: 'post',
        data: params,
    })
}

/**created by ZhangY on 2020/6/8
 *@desc 导出 下载附件类
 */

export function exportExcel(params) {
    const url = "xxx/xxx/xxx"
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'C-Requested-With': 'XMLHttpRequest',
            // 'x-cookie': cookie['x-cookie'] || ''
        },
        method: "POST",
        body: JSON.stringify(params),
    };
    return fetch(url, options)
}

/**created by ZhangY on 2020/6/8
 *@desc getBlob
 */
export function getBlob(response) {
    return response.blob()
}

/**created by ZhangY on 2020/6/8
 *@desc downLoad
 */
export function downLoad(response, name) {
    getBlob(response).then((res) => {
        let newBlob = res;
        let fileName = name;
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(newBlob, fileName)
        } else {
            let link = document.createElement('a');
            link.href = window.URL.createObjectURL(newBlob);
            link.download = fileName;
            document.body.appendChild(link);
            let evt = document.createEvent('MouseEvents');
            evt.initEvent('click', false, false)
            link.dispatchEvent(evt)
            document.body.removeChild(link)
        }
    })
}








