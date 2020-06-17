Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    tabBarList: [{
      pagePath: "/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    }, {
      pagePath: "/my/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "我的"
    }],
    tabBarList1: [{
      pagePath: "/index/index",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    },
    {
      pagePath: "/index/index2",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "新增"
    },{
      pagePath: "/my/index",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "我的"
    }],
    list:[],
    tabBarShow:true
  },
  attached() {
    this.getTabBar()
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },
    getTabBar() {
      console.log(this.data.tabBarShow, '获取tab')
      let show = this.data.tabBarShow
      if(show){
        this.setData({
          list: this.data.tabBarList1
        })
      }else{
        this.setData({
          list: this.data.tabBarList
        })
      }
    }
  }
})