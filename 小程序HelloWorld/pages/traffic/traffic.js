// pages/traffic/traffic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chargeTitle:"滨江道充电桩",
    chargeContent1:"排队车辆：2辆",
    chargeContent2:"等待时间：10分钟",
    shareTitle:"李先生",
    shareContent1:"方式：自驾",
    shareContent2:"时间：18：10",
    shareContent3:"目的地：上海市 浦东新区 龙阳路 1880弄",
    shareContent4:"与你匹配度：高",
    parkTitle:"AI大厦停车场",
    parkContent1:"费用：10元／小时",
    parkContent2:"上限：50元",
    parkContent3:"距离目的地：3.2km",
    parkContent4:"剩余车位：20个",
    longitude:"121.45",
    latitude:"31.17",
    chargeDiscription:false,
    shareDiscription:false,
    parkDiscription:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  clearItems: function(event) {
    this.setData({
      chargeDiscription: false,
      shareDiscription: false,
      parkDiscription: false
    });
  },

  carShare: function(event) {
    this.clearItems(event);
    this.setData({markers: [{
      id: 10,
      latitude: 31.16432,
      longitude: 121.45242,
      width: 50,
      height: 50
    },
      {
        id: 11,
        latitude: 31.15231,
        longitude: 121.44843,
        width: 50,
        height: 50
      },
      {
        id: 12,
        latitude: 31.16,
        longitude: 121.442093,
        width: 50,
        height: 50
      }],
      latitude: 31.163243,
      longitude: 121.45});
  },

  carCharge: function (event) {
    this.clearItems(event);
    this.setData({
      markers: [{
        iconPath: "/image/icons/charge.png",
        id: 0,
        latitude: 31.17,
        longitude: 121.45,
        width: 50,
        height: 50
      },
      {
        iconPath: "/image/icons/charge.png",
        id: 1,
        latitude: 31.15,
        longitude: 121.45843,
        width: 50,
        height: 50
      },
      {
        iconPath: "/image/icons/charge.png",
        id: 2,
        latitude: 31.16,
        longitude: 121.451093,
        width: 50,
        height: 50
      }],
      latitude: 31.17,
      longitude: 121.45
    });
  },

  carParking: function (event) {
    this.clearItems(event);
    this.setData({
      markers: [{
        iconPath: "/image/icons/parking.png",
        id: 100,
        latitude: 31.169543,
        longitude: 121.450321,
        width: 30,
        height: 30
      },
      {
        iconPath: "/image/icons/parking.png",
        id: 101,
        latitude: 31.150125,
        longitude: 121.45243,
        width: 30,
        height: 30
      },
      {
        iconPath: "/image/icons/parking.png",
        id: 102,
        latitude: 31.16012,
        longitude: 121.455093,
        width: 30,
        height: 30
      }],
      latitude: 31.16,
      longitude: 121.45
    });
  },

  markerTap: function(event) {
    if (event.markerId < 10) {
      this.setData({
        chargeDiscription:true
      });
    } else if (event.markerId <100) {
      this.setData({
        shareDiscription: true
      });
    } else if (event.markerId<1000) {
      this.setData({
        parkDiscription: true
      });
    }
  }
})