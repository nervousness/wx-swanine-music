const BASE_URL = "https://swanine.xyz:3001"

class SWANRequest {
  request (url, method, params){
    return new Promise(( resolve, reject ) => {
      wx.request({
        url: BASE_URL + url,
        method: method,
        data: params,
        success: function(res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

const swanRequest = new SWANRequest()

export default swanRequest