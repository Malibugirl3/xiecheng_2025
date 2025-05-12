import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../types/actionTypes'

/**
 * 认证相关的action creators
 */

// 登录actions
export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials
})

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
})

// 注册actions
export const registerRequest = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData
})

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS
})

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error
})

// 登出action
export const logout = () => ({
  type: LOGOUT
})