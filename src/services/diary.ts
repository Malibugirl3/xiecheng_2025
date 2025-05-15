import { DiaryItem, Comment } from '../types';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export interface CreateDiaryParams {
  title: string;
  content: string;
  location: string;
  images: string[];
}

const getHeaders = (token: string) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
});

export const getDiaries = async (token: string): Promise<DiaryItem[]> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries`, {
      headers: getHeaders(token)
    });

    if (!response.ok) {
      throw new Error('获取游记列表失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '获取游记列表失败');
  }
};

export const getDiaryById = async (id: string, token: string): Promise<DiaryItem> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries/${id}`, {
      headers: getHeaders(token)
    });

    if (!response.ok) {
      throw new Error('获取游记详情失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '获取游记详情失败');
  }
};

export const createDiary = async (data: CreateDiaryParams, token: string): Promise<DiaryItem> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('创建游记失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '创建游记失败');
  }
};

export const updateDiary = async (id: string, data: Partial<CreateDiaryParams>, token: string): Promise<DiaryItem> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries/${id}`, {
      method: 'PATCH',
      headers: getHeaders(token),
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('更新游记失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '更新游记失败');
  }
};

export const deleteDiary = async (id: string, token: string): Promise<void> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries/${id}`, {
      method: 'DELETE',
      headers: getHeaders(token)
    });

    if (!response.ok) {
      throw new Error('删除游记失败');
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '删除游记失败');
  }
};

export const toggleLike = async (id: string, token: string): Promise<{ likes: number; isLiked: boolean }> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries/${id}/like`, {
      method: 'POST',
      headers: getHeaders(token)
    });

    if (!response.ok) {
      throw new Error('操作失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '操作失败');
  }
};

export const addComment = async (diaryId: string, content: string, token: string): Promise<Comment> => {
  try {
    const response = await fetch(`${BASE_URL}/diaries/${diaryId}/comments`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify({ content })
    });

    if (!response.ok) {
      throw new Error('发表评论失败');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : '发表评论失败');
  }
};