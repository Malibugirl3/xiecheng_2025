/**
 * 全局常量配置
 */

// API配置
export const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.traveldiary.com/v1'
  : 'http://localhost:3000/api/v1'

// 分页配置
export const PAGE_SIZE = 10

// 图片上传配置
export const IMAGE_UPLOAD_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedTypes: ['image/jpeg', 'image/png', 'image/gif'],
  maxCount: 9
}

// 路由配置
export const ROUTES = {
  // 移动端路由
  MOBILE: {
    HOME: '/mobile/home',
    MY_TRIPS: '/mobile/my-trips',
    PUBLISH: '/mobile/publish',
    DETAIL: '/mobile/detail',
    AUTH: '/mobile/auth'
  },
  // PC端路由
  PC: {
    ADMIN: '/pc/admin'
  }
}

// 本地存储键名
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user'
}