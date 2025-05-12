import {
  FETCH_REVIEWS_REQUEST,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAILURE,
  APPROVE_REVIEW_REQUEST,
  APPROVE_REVIEW_SUCCESS,
  APPROVE_REVIEW_FAILURE,
  REJECT_REVIEW_REQUEST,
  REJECT_REVIEW_SUCCESS,
  REJECT_REVIEW_FAILURE
} from '../types/actionTypes'

/**
 * 审核相关的action creators
 */

// 获取审核列表
export const fetchReviewsRequest = (params) => ({
  type: FETCH_REVIEWS_REQUEST,
  payload: params
})

export const fetchReviewsSuccess = (data) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: data
})

export const fetchReviewsFailure = (error) => ({
  type: FETCH_REVIEWS_FAILURE,
  payload: error
})

// 审核通过
export const approveReviewRequest = (reviewId) => ({
  type: APPROVE_REVIEW_REQUEST,
  payload: reviewId
})

export const approveReviewSuccess = (reviewId) => ({
  type: APPROVE_REVIEW_SUCCESS,
  payload: reviewId
})

export const approveReviewFailure = (error) => ({
  type: APPROVE_REVIEW_FAILURE,
  payload: error
})

// 审核拒绝
export const rejectReviewRequest = (reviewId, reason) => ({
  type: REJECT_REVIEW_REQUEST,
  payload: { reviewId, reason }
})

export const rejectReviewSuccess = (reviewId) => ({
  type: REJECT_REVIEW_SUCCESS,
  payload: reviewId
})

export const rejectReviewFailure = (error) => ({
  type: REJECT_REVIEW_FAILURE,
  payload: error
})