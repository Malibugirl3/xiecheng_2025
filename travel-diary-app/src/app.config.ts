export default defineAppConfig({
  pages: [
    'pages/auth/login/index',
    'pages/index/index',
    'pages/follow/index',
    'pages/post/index',
    'pages/community/index',
    'pages/profile/index',
    'pages/trip/detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '旅行日记',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#1296db',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home-active.png'
      },
      {
        pagePath: 'pages/follow/index',
        text: '关注',
        iconPath: 'assets/icons/follow.png',
        selectedIconPath: 'assets/icons/follow-active.png'
      },
      {
        pagePath: 'pages/post/index',
        text: '发布',
        iconPath: 'assets/icons/post.png',
        selectedIconPath: 'assets/icons/post-active.png'
      },
      {
        pagePath: 'pages/community/index',
        text: '社区',
        iconPath: 'assets/icons/community.png',
        selectedIconPath: 'assets/icons/community-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/icons/profile.png',
        selectedIconPath: 'assets/icons/profile-active.png'
      }
    ]
  }
})
