import {Service} from "@/common/apiclient";
export function getAllCard() {
    return Service({
        url: '/api/site/his/getAllCard',
        method: 'get'
    })
}