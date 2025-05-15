import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import './index.scss';

interface DiaryItem {
  id: string;
  title: string;
  content: string;
  location: string;
  createTime: string;
  images: string[];
  likes: number;
  comments: number;
}

const DiaryList: React.FC = () => {
  const [diaries, setDiaries] = useState<DiaryItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDiaries();
  }, []);

  const fetchDiaries = async () => {
    setLoading(true);
    try {
      // TODO: 从API获取游记列表数据
      const mockData: DiaryItem[] = [
        {
          id: '1',
          title: '东京之旅',
          content: '这是一次难忘的旅行...',
          location: '东京, 日本',
          createTime: '2024-01-15',
          images: [],
          likes: 120,
          comments: 30
        },
        // 更多模拟数据
      ];
      setDiaries(mockData);
    } catch (error) {
      console.error('获取游记列表失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderDiaryItem = (diary: DiaryItem) => (
    <View key={diary.id} className='diary-item'>
      <Text className='diary-title'>{diary.title}</Text>
      <Text className='diary-location'>{diary.location}</Text>
      <Text className='diary-content'>{diary.content}</Text>
      <View className='diary-footer'>
        <Text className='diary-time'>{diary.createTime}</Text>
        <View className='diary-stats'>
          <Text className='likes'>点赞 {diary.likes}</Text>
          <Text className='comments'>评论 {diary.comments}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className='diary-list'>
      <ScrollView
        className='diary-scroll'
        scrollY
        scrollWithAnimation
      >
        {loading ? (
          <View className='loading'>加载中...</View>
        ) : (
          diaries.map(renderDiaryItem)
        )}
      </ScrollView>
    </View>
  );
};

export default DiaryList;