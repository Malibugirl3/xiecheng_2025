import { View, Text, Image } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import './index.scss'
import placeholderImage from '../../../assets/images/placeholder.svg'

interface TripDetail {
  id: number
  title: string
  cover: string
  description: string
  content: string
  author: string
  createTime: string
}

export default function TripDetail() {
  const router = useRouter()
  const [trip, setTrip] = useState<TripDetail>({
    id: 0,
    title: '',
    cover: placeholderImage,
    description: '',
    content: '',
    author: '',
    createTime: ''
  })

  useEffect(() => {
    const { id } = router.params
    // 这里模拟从后端获取数据
    // 实际项目中应该调用API获取数据
    setTrip({
      id: Number(id),
      title: '春日樱花之旅',
      cover: placeholderImage,
      description: '在这个春天，我们一起去寻找最美的樱花。漫步在樱花纷飞的小径上，感受春天的气息...',
      content: '这是一段详细的游记内容，描述了整个旅行的经历和感受。包含了许多精彩的瞬间和美好的回忆。',
      author: '旅行者小王',
      createTime: '2024-03-15'
    })
  }, [])

  return (
    <View className='trip-detail'>
      <Image 
        className='trip-cover' 
        src={trip.cover} 
        mode='aspectFill'
        onError={() => console.log('图片加载失败')}
      />
      <View className='trip-content'>
        <Text className='trip-title'>{trip.title}</Text>
        <View className='trip-info'>
          <Text className='trip-author'>{trip.author}</Text>
          <Text className='trip-time'>{trip.createTime}</Text>
        </View>
        <Text className='trip-description'>{trip.description}</Text>
        <Text className='trip-detail-content'>{trip.content}</Text>
      </View>
    </View>
  )
}