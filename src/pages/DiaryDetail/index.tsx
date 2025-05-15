import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import './index.scss';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  avatar: string;
  content: string;
  createTime: string;
}

interface DiaryDetail {
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

const DiaryDetail: React.FC = () => {
  const [diary, setDiary] = useState<DiaryDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDiaryDetail();
  }, []);

  const fetchDiaryDetail = async () => {
    try {
      // TODO: 从API获取游记详情
      const mockData: DiaryDetail = {
        id: '1',
        title: '东京之旅',
        content: '这是一次难忘的旅行，我们参观了很多著名的景点...',
        location: '东京, 日本',
        createTime: '2024-01-15',
        images: [],
        likes: 120,
        isLiked: false,
        comments: [
          {
            id: '1',
            userId: 'user1',
            userName: '旅行者',
            avatar: '',
            content: '很棒的游记！',
            createTime: '2024-01-16'
          }
        ],
        author: {
          id: 'author1',
          name: '小明',
          avatar: ''
        }
      };
      setDiary(mockData);
    } catch (error) {
      console.error('获取游记详情失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    if (!diary) return;
    try {
      // TODO: 调用点赞API
      setDiary(prev => prev ? {
        ...prev,
        likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
        isLiked: !prev.isLiked
      } : null);
    } catch (error) {
      console.error('点赞失败:', error);
    }
  };

  if (loading) {
    return <View className='loading'>加载中...</View>;
  }

  if (!diary) {
    return <View className='error'>游记不存在</View>;
  }

  return (
    <ScrollView className='diary-detail' scrollY>
      <View className='header'>
        <Text className='title'>{diary.title}</Text>
        <View className='author'>
          <Image className='avatar' src={diary.author.avatar} />
          <Text className='name'>{diary.author.name}</Text>
        </View>
        <Text className='time'>{diary.createTime}</Text>
        <Text className='location'>{diary.location}</Text>
      </View>

      <View className='content'>
        <Text className='text'>{diary.content}</Text>
        {diary.images.length > 0 && (
          <View className='images'>
            {diary.images.map((image, index) => (
              <Image
                key={index}
                className='image'
                src={image}
                mode='aspectFill'
              />
            ))}
          </View>
        )}
      </View>

      <View className='actions'>
        <View
          className={`like-btn ${diary.isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <Text className='count'>{diary.likes}</Text>
          <Text className='text'>点赞</Text>
        </View>
      </View>

      <View className='comments'>
        <Text className='title'>评论 ({diary.comments.length})</Text>
        {diary.comments.map(comment => (
          <View key={comment.id} className='comment-item'>
            <Image className='avatar' src={comment.avatar} />
            <View className='content'>
              <Text className='name'>{comment.userName}</Text>
              <Text className='text'>{comment.content}</Text>
              <Text className='time'>{comment.createTime}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DiaryDetail;