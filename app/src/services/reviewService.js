import Taro from '@tarojs/taro'
import { API_BASE_URL } from '../config/apiConfig'

/**
 * 审核相关的API服务
 * 封装游记审核的相关接口调用
 */
export const reviewService = {
  /**
   * 获取待审核列表
   * @param {Object} params - 查询参数
   * @param {number} params.page - 页码
   * @param {number} params.pageSize - 每页数量
   * @param {string} [params.status] - 审核状态
   * @returns {Promise} 待审核列表数据
   */
  getReviews: async (params) => {
    try {
      const response = await Taro.request({
        url: `${API_BASE_URL}/reviews`,
        method: 'GET',
        data: params,
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
      return response.data
    } catch (error) {
      throw new Error('获取审核列表失败：' + error.message)
    }
  },

  /**
   * 审核通过
   * @param {string} reviewId - 审核记录ID
   * @returns {Promise} 审核结果
   */
  approveReview: async (reviewId) => {
    try {
      await Taro.request({
        url: `${API_BASE_URL}/reviews/${reviewId}/approve`,
        method: 'POST',
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
    } catch (error) {
      throw new Error('审核通过操作失败：' + error.message)
    }
  },

  /**
   * 审核拒绝
   * @param {Object} params - 审核参数
   * @param {string} params.reviewId - 审核记录ID
   * @param {string} params.reason - 拒绝原因
   * @returns {Promise} 审核结果
   */
  rejectReview: async ({ reviewId, reason }) => {
    try {
      await Taro.request({
        url: `${API_BASE_URL}/reviews/${reviewId}/reject`,
        method: 'POST',
        data: { reason },
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
    } catch (error) {
      throw new Error('审核拒绝操作失败：' + error.message)
    }
  }
}