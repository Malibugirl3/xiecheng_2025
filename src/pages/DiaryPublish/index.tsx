import React, { useState } from 'react';
import { View, Text, Button, Textarea } from '@tarojs/components';
import { Input } from '../../components';
import './index.scss';

interface DiaryForm {
  title: string;
  location: string;
  content: string;
  images: string[];
}

const DiaryPublish: React.FC = () => {
  const [form, setForm] = useState<DiaryForm>({
    title: '',
    location: '',
    content: '',
    images: []
  });

  const handleInputChange = (field: keyof DiaryForm) => (e: { detail: { value: string } }) => {
    setForm(prev => ({
      ...prev,
      [field]: e.detail.value
    }));
  };

  const handleSubmit = async () => {
    try {
      // 表单验证
      if (!form.title.trim()) {
        throw new Error('请输入标题');
      }
      if (!form.location.trim()) {
        throw new Error('请输入地点');
      }
      if (!form.content.trim()) {
        throw new Error('请输入游记内容');
      }

      // TODO: 调用API发布游记
      console.log('发布游记:', form);
      
      // 发布成功后清空表单
      setForm({
        title: '',
        location: '',
        content: '',
        images: []
      });
    } catch (error) {
      console.error('发布失败:', error);
      // TODO: 显示错误提示
    }
  };

  return (
    <View className='diary-publish'>
      <View className='form-item'>
        <Text className='label'>标题</Text>
        <Input
          value={form.title}
          placeholder='请输入游记标题'
          onChange={handleInputChange('title')}
        />
      </View>

      <View className='form-item'>
        <Text className='label'>地点</Text>
        <Input
          value={form.location}
          placeholder='请输入旅行地点'
          onChange={handleInputChange('location')}
        />
      </View>

      <View className='form-item'>
        <Text className='label'>内容</Text>
        <Textarea
          value={form.content}
          placeholder='请记录你的旅行故事...'
          maxlength={2000}
          onInput={handleInputChange('content')}
          style={{ minHeight: '120px' }}
        />
      </View>

      <View className='form-item'>
        <Text className='label'>图片</Text>
        <View className='image-upload'>
          {/* TODO: 实现图片上传功能 */}
          <View className='upload-btn'>+</View>
        </View>
      </View>

      <Button
        className='submit-btn'
        onClick={handleSubmit}
      >
        发布游记
      </Button>
    </View>
  );
};

export default DiaryPublish;