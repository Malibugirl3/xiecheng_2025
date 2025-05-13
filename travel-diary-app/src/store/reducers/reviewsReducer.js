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

const initialState = {
  reviews: [],
  loading: false,
  error: null
}

const reviewsReducer = (state = initialState, action) => {
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
        reviews: action.payload,
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

export default reviewsReducer