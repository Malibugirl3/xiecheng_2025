/**
 * API配置文件
 * 管理API相关的配置信息
 */

// API基础URL
export const API_BASE_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api'  // 开发环境
  : 'https://api.traveldiary.com/api'  // 生产环境

// API超时时间（毫秒）
export const API_TIMEOUT = 10000

// API版本
export const API_VERSION = 'v1'

// 请求头配置
export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

// 响应状态码
export const API_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
}