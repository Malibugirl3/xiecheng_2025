import { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

import './app.scss'

/**
 * 应用入口组件
 * 负责全局状态管理配置、路由配置等
 */
class App extends Component {
  componentDidMount() {
    // 应用初始化逻辑
  }

  // 全局分享配置
  onShareAppMessage(res) {
    return {
      title: '旅游日记',
      path: '/pages/mobile/home/index'
    }
  }

  // 应用配置
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App