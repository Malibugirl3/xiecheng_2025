import { takeLatest, put, call } from 'redux-saga/effects'
import {
  LOGIN_REQUEST,
  REGISTER_REQUEST
} from '../types/actionTypes'
import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure
} from '../actions/authActions'
import { authService } from '../../services/authService'

/**
 * 认证相关的Saga
 * 处理登录、注册等异步操作
 */

// 处理登录请求
function* handleLogin(action) {
  try {
    // 调用登录API
    const response = yield call(authService.login, action.payload)
    // 登录成功，更新状态
    yield put(loginSuccess(response))
  } catch (error) {
    // 登录失败，处理错误
    yield put(loginFailure(error.message))
  }
}

// 处理注册请求
function* handleRegister(action) {
  try {
    // 调用注册API
    yield call(authService.register, action.payload)
    // 注册成功
    yield put(registerSuccess())
  } catch (error) {
    // 注册失败，处理错误
    yield put(registerFailure(error.message))
  }
}

// 监听认证相关的action
export default function* authSagas() {
  yield takeLatest(LOGIN_REQUEST, handleLogin)
  yield takeLatest(REGISTER_REQUEST, handleRegister)
}