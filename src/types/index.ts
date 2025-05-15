export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  content: string;
  createTime: string;
}

export interface DiaryItem {
  id: string;
  title: string;
  content: string;
  location: string;
  createTime: string;
  images: string[];
  likes: number;
  isLiked: boolean;
  comments: Comment[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}