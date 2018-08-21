// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    borderFlag: true,
    isModel: false,
    dotList: [{
      id: 0
    }, {
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }],
    btn_icon:"../../static/img/delete_icon.png",
    btn_msg:"撤销",
    _index:0
  },

  //  关闭弹窗
  clese:function(){
    this.setData({
      isModel: !this.data.isModel
    })
  },
  //  我见证 按钮
  jianZhengBtn() {
    console.log("我见证")
    this.setData({
      isModel: !this.data.isModel
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let  _this= this;

    switch (this.data._index){
        case  1:
        _this.setData({
          btn_icon: "../../static/img/renzheng_icon.png",
          btn_msg: "认证",
          _index: 1
        });
        break;
        case 2:
        _this.setData({
          btn_icon: "../../static/img/share_icon.png",
          btn_msg: "分享",
          right_icon:"../../static/img/shengxiao_icon.png",
          _index: 2
        });
        break;
      case 3:
        _this.setData({
          btn_icon: "../../static/img/huankuan_icon.png",
          right_icon: "../../static/img/shengxiao_icon.png",
          btn_msg: "还款",
          _index: 3
        });
        break;
        case 4:
        _this.setData({
          btn_icon: "../../static/img/delete_icon.png",
          right_icon: "../../static/img/shengxiao_icon.png",
          btn_msg: "作废",
          _index: 4
        });
        break;
      case 5:
        _this.setData({
          btn_icon: "../../static/img/share_icon.png",
          btn_msg: "分享",
          right_icon: "../../static/img/zuofei_icon.png",
          _index: 5
        });
        break;
      case 6:
        _this.setData({
          btn_icon: "../../static/img/share_icon.png",
          btn_msg: "违约",
          right_icon: "../../static/img/weiyue_icon.png",
          _index: 6,
          isModel:true
        });

        break;
    }
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})