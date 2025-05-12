import { combineReducers } from 'redux'
import authReducer from './authReducer'
import tripReducer from './tripReducer'
import reviewReducer from './reviewReducer'

/**
 * 根reducer
 * 组合所有子reducer，构建完整的状态树
 */
const rootReducer = combineReducers({
  auth: authReducer,     // 认证状态
  trips: tripReducer,    // 游记状态
  reviews: reviewReducer  // 审核状态
})

export default rootReducer