import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../types/actionTypes'

/**
 * 认证状态reducer
 * 处理用户登录、注册等认证相关的状态更新
 */

const initialState = {
  user: null,           // 当前用户信息
  token: null,          // 认证token
  isAuthenticated: false, // 是否已认证
  loading: false,       // 加载状态
  error: null          // 错误信息
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      }

    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case LOGOUT:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default authReducer