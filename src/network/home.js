import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/activityfromdb?pagecount=30'///allplateform
  });
}

export function getBkDgOptimusMaterial() {
  return request({
    url:'/bkDgOptimusMaterial'
  });
}

export function getGoodsData(type, page) {
  return request({
    url:'/test/getGoods',
    params:{
      type,
      page
    }
  });
}

export function getGoodsData1(type, page) {
  return request({
    url:'/goodlist',
    params:{
      type,
      page
    }
  });
}

export function getGoodsData2(type, page) {
  let url = "/goodlist/" + type + "/" + page;
  return request({
    url
  });
}
