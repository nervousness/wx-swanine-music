// pages/home-music/index.js
// import Toast from '@vant/weapp/toast/toast'
import {
  getBanner
} from "../../service/api_music"
// import queryRect from '../../utils/query-rect'
// import throttle from '../../utils/throttle'

// const throttleQueryRect = throttle(queryRect)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // swiperHeight: 0,
    value: '',
    banners: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPageData()
  },

  // 网络请求
  getPageData: function () {
    getBanner().then(res => {
      this.setData({
        banners: res.banners
      })
    })
  },

  onClick() {
    wx.navigateTo({
      url: '/pages/detail-search/index'
    })
  }

  // handleSwiperImageLoaded: function() {
  //   // 获取图片高度动态添加swiper container
  //   throttleQueryRect('.image').then(res => {
  //     console.log('ss')
  //     const rect = res[0]
  //     this.setData({ swiperHeight: rect.height })
  //   })
  // }
})