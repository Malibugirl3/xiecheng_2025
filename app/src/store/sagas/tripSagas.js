import { takeLatest, put, call } from 'redux-saga/effects'
import {
  FETCH_TRIPS_REQUEST,
  CREATE_TRIP_REQUEST,
  UPDATE_TRIP_REQUEST,
  DELETE_TRIP_REQUEST
} from '../types/actionTypes'
import {
  fetchTripsSuccess,
  fetchTripsFailure,
  createTripSuccess,
  createTripFailure,
  updateTripSuccess,
  updateTripFailure,
  deleteTripSuccess,
  deleteTripFailure
} from '../actions/tripActions'
import { tripService } from '../../services/tripService'

/**
 * 游记相关的Saga
 * 处理游记的获取、创建、更新、删除等异步操作
 */

// 处理获取游记列表
function* handleFetchTrips(action) {
  try {
    // 调用获取游记列表API
    const response = yield call(tripService.getTrips, action.payload)
    // 获取成功，更新状态
    yield put(fetchTripsSuccess(response))
  } catch (error) {
    // 获取失败，处理错误
    yield put(fetchTripsFailure(error.message))
  }
}

// 处理创建游记
function* handleCreateTrip(action) {
  try {
    // 调用创建游记API
    const response = yield call(tripService.createTrip, action.payload)
    // 创建成功，更新状态
    yield put(createTripSuccess(response))
  } catch (error) {
    // 创建失败，处理错误
    yield put(createTripFailure(error.message))
  }
}

// 处理更新游记
function* handleUpdateTrip(action) {
  try {
    // 调用更新游记API
    const response = yield call(tripService.updateTrip, action.payload)
    // 更新成功，更新状态
    yield put(updateTripSuccess(response))
  } catch (error) {
    // 更新失败，处理错误
    yield put(updateTripFailure(error.message))
  }
}

// 处理删除游记
function* handleDeleteTrip(action) {
  try {
    // 调用删除游记API
    yield call(tripService.deleteTrip, action.payload)
    // 删除成功，更新状态
    yield put(deleteTripSuccess(action.payload))
  } catch (error) {
    // 删除失败，处理错误
    yield put(deleteTripFailure(error.message))
  }
}

// 监听游记相关的action
export default function* tripSagas() {
  yield takeLatest(FETCH_TRIPS_REQUEST, handleFetchTrips)
  yield takeLatest(CREATE_TRIP_REQUEST, handleCreateTrip)
  yield takeLatest(UPDATE_TRIP_REQUEST, handleUpdateTrip)
  yield takeLatest(DELETE_TRIP_REQUEST, handleDeleteTrip)
}