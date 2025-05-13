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

const initialState = {
  trips: [],
  loading: false,
  error: null,
  currentTrip: null
}

const tripsReducer = (state = initialState, action) => {
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
        trips: action.payload,
        error: null
      }

    case CREATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: [...state.trips, action.payload],
        currentTrip: action.payload,
        error: null
      }

    case UPDATE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: state.trips.map(trip =>
          trip.id === action.payload.id ? action.payload : trip
        ),
        currentTrip: action.payload,
        error: null
      }

    case DELETE_TRIP_SUCCESS:
      return {
        ...state,
        loading: false,
        trips: state.trips.filter(trip => trip.id !== action.payload),
        currentTrip: null,
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

export default tripsReducer