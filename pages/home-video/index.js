// pages/home-video/index.js
import {
  getTopMV
} from '../../service/api_video.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMvs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getTopMVData(0)
  },

  // 封装网络请求方法
  getTopMVData: async function (offset) {
    if (!this.data.hasMore && offset !== 0) return

    // 设置title加载动画
    wx.showNavigationBarLoading()

    const res = await getTopMV(offset)
    let newData = this.data.topMvs
    if (offset === 0) {
      newData = res.data
    } else {
      newData = newData.concat(res.data)
    }

    // 设置数据
    this.setData({
      topMvs: newData
    })
    this.setData({
      hasMore: res.hasMore
    })

    // 关闭刷新动画
    if (offset === 0) {
      setTimeout(() => {
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
      }, 700)
    }
  },

  // 时间处理方法
  handleVideoItemClick: function (event) {

    // 获取当前点击的item id
    const id = event.currentTarget.dataset.item.id
    
    // 跳转到详情页面
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  },

  /**
   * 下拉刷新生命周期 -- 加载数据
   */
  onPullDownRefresh: async function () {
    this.getTopMVData(0)
  },

  /**
   * 滚动底部生命周期函数 -- 加载数据
   */
  onReachBottom: async function () {
    this.getTopMVData(this.data.topMvs.length)
  }
})