import axios from 'axios'
import { API_BASE_URL } from '../config/constants'

const tripService = {
  // 获取游记列表
  getTrips: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 获取单个游记详情
  getTripById: async (tripId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips/${tripId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 创建游记
  createTrip: async (tripData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/trips`, tripData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 更新游记
  updateTrip: async (tripId, tripData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/trips/${tripId}`, tripData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 删除游记
  deleteTrip: async (tripId) => {
    try {
      await axios.delete(`${API_BASE_URL}/trips/${tripId}`)
      return true
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 获取用户的游记列表
  getUserTrips: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}/trips`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}

export default tripService