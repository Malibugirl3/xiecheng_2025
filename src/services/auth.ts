import { User } from '../types';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams extends LoginParams {
  name: string;
}

export const login = async (params: LoginParams): Promise<{ user: User; token: string }> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    if (!response.ok) {
      throw new Error('登录失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '登录失败');
  }
};

export const register = async (params: RegisterParams): Promise<{ user: User; token: string }> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    if (!response.ok) {
      throw new Error('注册失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '注册失败');
  }
};

export const updateProfile = async (userId: string, data: Partial<User>, token: string): Promise<User> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('更新个人信息失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '更新个人信息失败');
  }
};