import {
  FETCH_TRIPS_REQUEST,
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILURE,
  CREATE_TRIP_REQUEST,
  CREATE_TRIP_SUCCESS,
  CREATE_TRIP_FAILURE,
  UPDATE_TRIP_REQUEST,
  UPDATE_TRIP_SUCCESS,
  UPDATE_TRIP_FAILURE,
  DELETE_TRIP_REQUEST,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILURE
} from '../types/actionTypes'

/**
 * 游记状态reducer
 * 处理游记列表、创建、更新、删除等操作的状态管理
 */

const initialState = {
  trips: [],          // 游记列表
  currentTrip: null,  // 当前查看/编辑的游记
  loading: false,     // 加载状态
  error: null,       // 错误信息
  pagination: {      // 分页信息
    current: 1,
    pageSize: 10,
    total: 0
  }
}

const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_REQUEST:
    case CREATE_TRIP_REQUEST:
    case UPDATE_TRIP_REQUEST:
    case DELETE_TRIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: action.payload.trips,
        pagination: {
          ...state.pagination,
          total: action.payload.total
        },
        error: null
      }

    case CREATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: [action.payload, ...state.trips],
        error: null
      }

    case UPDATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: state.trips.map(trip =>
          trip.id === action.payload.id ? action.payload : trip
        ),
        error: null
      }

    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: state.trips.filter(trip => trip.id !== action.payload),
        error: null
      }

    case FETCH_TRIPS_FAILURE:
    case CREATE_TRIP_FAILURE:
    case UPDATE_TRIP_FAILURE:
    case DELETE_TRIP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default tripReducer