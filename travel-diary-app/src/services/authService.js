import axios from 'axios'
import { API_BASE_URL } from '../config/constants'

const authService = {
  // 用户登录
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 用户注册
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 用户登出
  logout: () => {
    localStorage.removeItem('token')
  },

  // 获取当前用户信息
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return null

      const response = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 设置认证token
  setAuthToken: (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }
}

export default authService