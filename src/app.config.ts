export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/orders/index",
    "pages/cater/index",
    "pages/user/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  // 底部tab
  tabBar: {
    color: "#c1c1c1",
    selectedColor: "#d2e478",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/tab-bar/home.png",
        selectedIconPath: "assets/tab-bar/home-active.png",
      },
      {
        pagePath: "pages/cater/index",
        text: "点餐",
        iconPath: "assets/tab-bar/cater.png",
        selectedIconPath: "assets/tab-bar/cater-active.png",
      },
      {
        pagePath: "pages/orders/index",
        text: "订单",
        iconPath: "assets/tab-bar/order.png",
        selectedIconPath: "assets/tab-bar/order-active.png",
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "assets/tab-bar/user.png",
        selectedIconPath: "assets/tab-bar/user-active.png",
      },
    ],
  },
});
