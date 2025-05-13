import axios from 'axios'
import { API_BASE_URL } from '../config/constants'

const reviewService = {
  // 获取待审核游记列表
  getReviews: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reviews`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 获取单个待审核游记详情
  getReviewById: async (reviewId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reviews/${reviewId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 审核通过
  approveReview: async (reviewId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reviews/${reviewId}/approve`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 审核拒绝
  rejectReview: async (reviewId, reason) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reviews/${reviewId}/reject`, { reason })
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  },

  // 获取审核历史记录
  getReviewHistory: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/reviews/history`)
      return response.data
    } catch (error) {
      throw error.response?.data || error.message
    }
  }
}

export default reviewService