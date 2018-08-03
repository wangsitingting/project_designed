// pages/consume/scene/scene.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "无人售货机01",
    content1:"距离：1.3公里",
    content2:"类型：饮料／小食",
    longitude: "121.45",
    latitude: "31.17",
    markers: [{
      iconPath: "/image/icons/vendingmachine.png",
      id: 100,
      latitude: 31.169543,
      longitude: 121.450321,
      width: 30,
      height: 30
    },
    {
      iconPath: "/image/icons/vendingmachine.png",
      id: 101,
      latitude: 31.150125,
      longitude: 121.45243,
      width: 30,
      height: 30
    },
    {
      iconPath: "/image/icons/vendingmachine.png",
      id: 102,
      latitude: 31.16012,
      longitude: 121.455093,
      width: 30,
      height: 30
    }],
    discription:false
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

  markerTap: function (event) {
    this.setData({
      discription: true
    });
  },

  commodityDetail: function(event) {
    wx.navigateTo({
      url: '../../commodity/exhibition'
    })
  }
})