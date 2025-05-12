/**
 * 应用全局配置文件
 * 管理应用的基础配置信息
 */

// 应用基础配置
export const APP_CONFIG = {
  name: '旅游日记',
  version: '1.0.0',
  description: '记录精彩旅行时刻',
  author: 'Travel Diary Team'
}

// 主题配置
export const THEME_CONFIG = {
  primaryColor: '#1890ff',
  successColor: '#52c41a',
  warningColor: '#faad14',
  errorColor: '#f5222d',
  textColor: '#333333',
  borderRadius: '4px'
}

// 路由配置
export const ROUTE_CONFIG = {
  // 移动端路由
  mobile: {
    home: '/pages/mobile/home/index',
    myTrips: '/pages/mobile/my-trips/index',
    publish: '/pages/mobile/publish/index',
    detail: '/pages/mobile/detail/index',
    login: '/pages/mobile/auth/login',
    register: '/pages/mobile/auth/register'
  },
  // PC端路由
  pc: {
    dashboard: '/pages/pc/admin/dashboard',
    reviewList: '/pages/pc/admin/review-list',
    reviewDetail: '/pages/pc/admin/review-detail'
  }
}

// 分页配置
export const PAGINATION_CONFIG = {
  defaultPageSize: 10,
  pageSizeOptions: ['10', '20', '50', '100']
}

// 上传配置
export const UPLOAD_CONFIG = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  acceptedFileTypes: ['image/jpeg', 'image/png', 'image/gif'],
  maxFileCount: 9
}

// 本地存储键名
export const STORAGE_KEYS = {
  token: 'token',
  userInfo: 'userInfo',
  theme: 'theme'
}