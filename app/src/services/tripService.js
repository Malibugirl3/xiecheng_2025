import Taro from '@tarojs/taro'
import { API_BASE_URL } from '../config/apiConfig'

/**
 * 游记相关的API服务
 * 封装游记的增删改查等接口调用
 */
export const tripService = {
  /**
   * 获取游记列表
   * @param {Object} params - 查询参数
   * @param {number} params.page - 页码
   * @param {number} params.pageSize - 每页数量
   * @param {string} [params.keyword] - 搜索关键词
   * @returns {Promise} 游记列表数据
   */
  getTrips: async (params) => {
    try {
      const response = await Taro.request({
        url: `${API_BASE_URL}/trips`,
        method: 'GET',
        data: params,
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
      return response.data
    } catch (error) {
      throw new Error('获取游记列表失败：' + error.message)
    }
  },

  /**
   * 创建游记
   * @param {Object} tripData - 游记数据
   * @param {string} tripData.title - 标题
   * @param {string} tripData.content - 内容
   * @param {Array} tripData.images - 图片列表
   * @returns {Promise} 创建的游记数据
   */
  createTrip: async (tripData) => {
    try {
      const response = await Taro.request({
        url: `${API_BASE_URL}/trips`,
        method: 'POST',
        data: tripData,
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
      return response.data
    } catch (error) {
      throw new Error('创建游记失败：' + error.message)
    }
  },

  /**
   * 更新游记
   * @param {Object} tripData - 游记数据
   * @param {string} tripData.id - 游记ID
   * @param {string} tripData.title - 标题
   * @param {string} tripData.content - 内容
   * @param {Array} tripData.images - 图片列表
   * @returns {Promise} 更新后的游记数据
   */
  updateTrip: async (tripData) => {
    try {
      const response = await Taro.request({
        url: `${API_BASE_URL}/trips/${tripData.id}`,
        method: 'PUT',
        data: tripData,
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
      return response.data
    } catch (error) {
      throw new Error('更新游记失败：' + error.message)
    }
  },

  /**
   * 删除游记
   * @param {string} tripId - 游记ID
   * @returns {Promise} 删除结果
   */
  deleteTrip: async (tripId) => {
    try {
      await Taro.request({
        url: `${API_BASE_URL}/trips/${tripId}`,
        method: 'DELETE',
        header: {
          'Authorization': `Bearer ${Taro.getStorageSync('token')}`
        }
      })
    } catch (error) {
      throw new Error('删除游记失败：' + error.message)
    }
  }
}