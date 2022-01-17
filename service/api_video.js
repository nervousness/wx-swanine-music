import swanRequest from './index'

export function getTopMV(offset, limit = 10) {
  return swanRequest.get("/top/mv", {
    offset,
    limit
  })
}

/**
 * 请求MV URL
 * @param { number } id 
 */
export function getMVURL(id) {
  return swanRequest.get("/mv/url", {
    id
  })
}

/**
 * 请求MV详情
 * @param { number } mvid 
 */
export function getMVDetail(mvid) {
  return swanRequest.get("/mv/detail", {
    mvid
  })
}

/**
 * 请求MV详情相关联视频
 * @param { number } id 
 */
export function getRelatedVideo(id) {
  return swanRequest.get("/related/allvideo", {
    id
  })
}