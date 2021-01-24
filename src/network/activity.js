import {request} from './request'

export function getAllplateform() {
    return request({
        url:'/allplateform'///allplateform
    });
}

/*export function getPlateformData(type, plateformname, page) {
    let url = "/goodlist/" + type + "/" + page;
    let platef = plateformname
    return request({
        url,
        params:{
            type,
            page
        }
    });
}*/

export function getPlateformData(passpage, plateformname="", passsearchkey="", terminaltype="",  passpagecount=20) {
/*    return request({
        url:'/activityfromdb/mobile?pagecount=30'///allplateform
    });*/
    //let url = "/activityfromdb/" + terminaltype;
    let url = "/activityfromdb";
    let plateform = plateformname;
    let page = passpage;
    let pagecount = passpagecount;
    let searchkey = passsearchkey;

    return request({
        url,
        params:{
            page,
            pagecount,
            plateform,
            searchkey
        }
    })
}