// pages/detail-video/index.js
import {
  getMVDetail,
  getMVURL,
  getRelatedVideo
} from "../../service/api_video"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo: {},
    mvDetail: {},
    mvRelated: {},
    danmuList: [
      {
        text: "🚴‍♂️----测试弹幕",
        color: "#4ade80",
        time: 3
      },
      {
        text: "✌️鸿鸿-音乐的神！🎉💨🎏",
        color: "#fda4af",
        time: 6
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取传入id
    const id = options.id

    // 2.获取页面的数据
    this.getPageData(id)
  },
  
  /**
   * 请求页面数据
   */
  getPageData: function (id) {
    // 1.请求播放地址
    getMVURL(id).then(res => {
      this.setData({ mvURLInfo: res.data })
    })

    // 2.请求视频信息
    getMVDetail(id).then(res => {
      this.setData({ mvDetail: res.data })
    })

    // 3.请求相关视频
    getRelatedVideo(id).then(res => {
      this.setData({ mvRelated: res.data })
    })
  }
})