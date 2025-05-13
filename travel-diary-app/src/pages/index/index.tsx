import { View, Text, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import './index.scss'
import placeholderImage from '../../assets/images/placeholder.svg'

interface TripItem {
  id: number
  title: string
  cover: string
  description: string
  author: string
  createTime: string
}

export default function Index() {
  const [trips, setTrips] = useState<TripItem[]>([
    {
      id: 1,
      title: '春日樱花之旅',
      cover: placeholderImage,
      description: '在这个春天，我们一起去寻找最美的樱花。漫步在樱花纷飞的小径上，感受春天的气息...',
      author: '旅行者小王',
      createTime: '2024-03-15'
    },
    {
      id: 2,
      title: '云南古镇游记',
      cover: placeholderImage,
      description: '探索云南古镇的深厚文化底蕴，感受当地特色美食和民俗文化...',
      author: '背包客小李',
      createTime: '2024-03-14'
    }
  ])

  useLoad(() => {
    console.log('首页加载完成')
  })

  return (
    <View className='index'>
      <View className='header'>
        <Text className='title'>精选游记</Text>
      </View>
      <View className='trip-list'>
        {trips.map(trip => (
          <View 
            key={trip.id} 
            className='trip-item'
            onClick={() => {
              Taro.navigateTo({
                url: `/pages/trip/detail/index?id=${trip.id}`
              })
            }}
          >
            <Image 
              className='trip-cover' 
              src={trip.cover} 
              mode='aspectFill'
              onError={() => console.log(`图片加载失败：${trip.title}`)}
            />
            <View className='trip-content'>
              <Text className='trip-title'>{trip.title}</Text>
              <Text className='trip-description'>{trip.description}</Text>
              <View className='trip-footer'>
                <Text className='trip-author'>{trip.author}</Text>
                <Text className='trip-time'>{trip.createTime}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
