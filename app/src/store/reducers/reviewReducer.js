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
 * 审核状态reducer
 * 处理游记审核流程的状态管理
 */

const initialState = {
  reviews: [],        // 待审核列表
  loading: false,     // 加载状态
  error: null,       // 错误信息
  pagination: {      // 分页信息
    current: 1,
    pageSize: 10,
    total: 0
  }
}

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
    case APPROVE_REVIEW_REQUEST:
    case REJECT_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload.reviews,
        pagination: {
          ...state.pagination,
          total: action.payload.total
        },
        error: null
      }

    case APPROVE_REVIEW_SUCCESS:
    case REJECT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: state.reviews.filter(review => review.id !== action.payload),
        error: null
      }

    case FETCH_REVIEWS_FAILURE:
    case APPROVE_REVIEW_FAILURE:
    case REJECT_REVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default reviewReducer