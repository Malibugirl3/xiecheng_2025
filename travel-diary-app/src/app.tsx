import { useEffect } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'

function App({ children }) {
  useEffect(() => {
    // 添加路由拦截
    const checkLoginStatus = () => {
      const token = Taro.getStorageSync('userToken')
      const currentPath = Taro.getCurrentInstance().router?.path
      
      // 如果没有token且不在登录页面，则跳转到登录页
      if (!token && currentPath !== '/pages/auth/login/index') {
        Taro.redirectTo({
          url: '/pages/auth/login/index'
        })
      }
    }

    // 监听路由变化
    Taro.eventCenter.on('routeChange', checkLoginStatus)

    // 初始检查登录状态
    checkLoginStatus()

    return () => {
      Taro.eventCenter.off('routeChange', checkLoginStatus)
    }
  }, [])

  return children
}

export default App