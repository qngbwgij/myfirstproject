import {request} from './request'

export function getconfig() {
    return request({
        url:'/tbconfig'
    });
}