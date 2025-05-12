import Taro from '@tarojs/taro'
import { API_BASE_URL } from '../config/apiConfig'

/**
 * 认证相关的API服务
 * 封装用户登录、注册等接口调用
 */
export const authService = {
  /**
   * 用户登录
   * @param {Object} credentials - 登录凭证
   * @param {string} credentials.username - 用户名
   * @param {string} credentials.password - 密码
   * @returns {Promise} 登录结果
   */
  login: async (credentials) => {
    try {
      const response = await Taro.request({
        url: `${API_BASE_URL}/auth/login`,
        method: 'POST',
        data: credentials
      })
      
      // 保存token到本地存储
      if (response.data.token) {
        Taro.setStorageSync('token', response.data.token)
      }

      return response.data
    } catch (error) {
      throw new Error('登录失败：' + error.message)
    }
  },

  /**
   * 用户注册
   * @param {Object} userData - 用户注册信息
   * @param {string} userData.username - 用户名
   * @param {string} userData.password - 密码
   * @param {string} userData.email - 邮箱
   * @returns {Promise} 注册结果
   */
  register: async (userData) => {
    try {
      const response = await Taro.request({
        url: `${API_BASE_URL}/auth/register`,
        method: 'POST',
        data: userData
      })
      return response.data
    } catch (error) {
      throw new Error('注册失败：' + error.message)
    }
  },

  /**
   * 退出登录
   * 清除本地存储的认证信息
   */
  logout: () => {
    Taro.removeStorageSync('token')
  }
}