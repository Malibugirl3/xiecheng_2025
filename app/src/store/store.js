import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

/**
 * Redux状态管理配置
 * 集成了Redux Saga中间件用于处理异步操作
 * 配置了Redux DevTools以便开发调试
 */

// 创建saga中间件实例
const sagaMiddleware = createSagaMiddleware()

// 配置Redux开发工具
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // 开发工具配置项
      })
    : compose

// 配置中间件
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

// 创建store实例
const store = createStore(rootReducer, enhancer)

// 运行Saga
sagaMiddleware.run(rootSaga)

export default store