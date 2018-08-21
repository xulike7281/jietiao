// pages/notarize/notarize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defalut_img: "../../static/img/role-icon.png",
    avtive_img:"../../static/img/role-icon-while.png",
    inputValue:"￥",
    status_msg: '点 击 "借 条 确 认" 确 认 借 款 事 实',
    btn_msg:"借 条 确 认"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  config:function(){
    wx.navigateTo({
      url: '/pages/main/main',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 还款金额
  refundFn(e){
    console.log("value", e.detail.value, e.detail.value.indexOf("￥"))
      if(e.detail.value.indexOf("￥")!= -1){
        this.setData({
          inputValue: e.detail.value
        })
      }else{

      this.setData({
        inputValue: "￥"+e.detail.value
      })
      }
  },
  onLoad: function (options) {

     // 更换页面的title 
    // wx.setNavigationBarTitle({
    //   title: "确认作废"
    // })
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
  
  }
})