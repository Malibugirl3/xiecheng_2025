import { all, fork } from 'redux-saga/effects'
import authSagas from './authSagas'
import tripSagas from './tripSagas'
import reviewSagas from './reviewSagas'

/**
 * 根Saga
 * 组合所有子Saga，统一管理异步操作
 */
export default function* rootSaga() {
  yield all([
    fork(authSagas),    // 认证相关的异步操作
    fork(tripSagas),    // 游记相关的异步操作
    fork(reviewSagas)   // 审核相关的异步操作
  ])
}