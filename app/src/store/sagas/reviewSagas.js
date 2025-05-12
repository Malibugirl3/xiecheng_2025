import { takeLatest, put, call } from 'redux-saga/effects'
import {
  FETCH_REVIEWS_REQUEST,
  APPROVE_REVIEW_REQUEST,
  REJECT_REVIEW_REQUEST
} from '../types/actionTypes'
import {
  fetchReviewsSuccess,
  fetchReviewsFailure,
  approveReviewSuccess,
  approveReviewFailure,
  rejectReviewSuccess,
  rejectReviewFailure
} from '../actions/reviewActions'
import { reviewService } from '../../services/reviewService'

/**
 * 审核相关的Saga
 * 处理审核列表的获取、审核通过和拒绝等异步操作
 */

// 处理获取审核列表
function* handleFetchReviews(action) {
  try {
    // 调用获取审核列表API
    const response = yield call(reviewService.getReviews, action.payload)
    // 获取成功，更新状态
    yield put(fetchReviewsSuccess(response))
  } catch (error) {
    // 获取失败，处理错误
    yield put(fetchReviewsFailure(error.message))
  }
}

// 处理审核通过
function* handleApproveReview(action) {
  try {
    // 调用审核通过API
    yield call(reviewService.approveReview, action.payload)
    // 审核通过成功，更新状态
    yield put(approveReviewSuccess(action.payload))
  } catch (error) {
    // 审核通过失败，处理错误
    yield put(approveReviewFailure(error.message))
  }
}

// 处理审核拒绝
function* handleRejectReview(action) {
  try {
    // 调用审核拒绝API
    yield call(reviewService.rejectReview, action.payload)
    // 审核拒绝成功，更新状态
    yield put(rejectReviewSuccess(action.payload.reviewId))
  } catch (error) {
    // 审核拒绝失败，处理错误
    yield put(rejectReviewFailure(error.message))
  }
}

// 监听审核相关的action
export default function* reviewSagas() {
  yield takeLatest(FETCH_REVIEWS_REQUEST, handleFetchReviews)
  yield takeLatest(APPROVE_REVIEW_REQUEST, handleApproveReview)
  yield takeLatest(REJECT_REVIEW_REQUEST, handleRejectReview)
}