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

// 获取游记列表
export const fetchTripsRequest = () => ({
  type: FETCH_TRIPS_REQUEST
})

export const fetchTripsSuccess = (trips) => ({
  type: FETCH_TRIPS_SUCCESS,
  payload: trips
})

export const fetchTripsFailure = (error) => ({
  type: FETCH_TRIPS_FAILURE,
  payload: error
})

// 创建游记
export const createTripRequest = (tripData) => ({
  type: CREATE_TRIP_REQUEST,
  payload: tripData
})

export const createTripSuccess = (trip) => ({
  type: CREATE_TRIP_SUCCESS,
  payload: trip
})

export const createTripFailure = (error) => ({
  type: CREATE_TRIP_FAILURE,
  payload: error
})

// 更新游记
export const updateTripRequest = (tripId, tripData) => ({
  type: UPDATE_TRIP_REQUEST,
  payload: { id: tripId, ...tripData }
})

export const updateTripSuccess = (trip) => ({
  type: UPDATE_TRIP_SUCCESS,
  payload: trip
})

export const updateTripFailure = (error) => ({
  type: UPDATE_TRIP_FAILURE,
  payload: error
})

// 删除游记
export const deleteTripRequest = (tripId) => ({
  type: DELETE_TRIP_REQUEST,
  payload: tripId
})

export const deleteTripSuccess = (tripId) => ({
  type: DELETE_TRIP_SUCCESS,
  payload: tripId
})

export const deleteTripFailure = (error) => ({
  type: DELETE_TRIP_FAILURE,
  payload: error
})