import { View, Text, Input, Button } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'

import './index.scss'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = () => {
    if (!username || !password) {
      Taro.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      })
      return
    }

    if (!isLogin) {
      if (password !== confirmPassword) {
        Taro.showToast({
          title: '两次输入的密码不一致',
          icon: 'none'
        })
        return
      }
      // 这里模拟注册成功
      Taro.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 1500
      })
      setIsLogin(true)
      return
    }

    // 这里模拟登录成功
    Taro.setStorageSync('userToken', 'demo-token')
    Taro.setStorageSync('userInfo', { username })
    
    Taro.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 1500
    })

    setTimeout(() => {
      Taro.navigateTo({
        url: '/pages/index/index'
      })
    }, 1500)
  }

  return (
    <View className='login-container'>
      <View className='login-header'>
        <Text className='login-title'>旅行日记</Text>
        <Text className='login-subtitle'>记录你的每一段旅程</Text>
        <View className='auth-switch'>
          <Text 
            className={`switch-item ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            登录
          </Text>
          <Text 
            className={`switch-item ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            注册
          </Text>
        </View>
      </View>
      
      <View className='login-form'>
        <View className='form-item'>
          <Input
            className='input'
            type='text'
            placeholder='请输入用户名'
            value={username}
            onInput={e => setUsername(e.detail.value)}
          />
        </View>
        <View className='form-item'>
          <Input
            className='input'
            type='safe-password'
            placeholder='请输入密码'
            value={password}
            onInput={e => setPassword(e.detail.value)}
          />
        </View>
        {!isLogin && (
          <View className='form-item'>
            <Input
              className='input'
              type='safe-password'
              placeholder='请确认密码'
              value={confirmPassword}
              onInput={e => setConfirmPassword(e.detail.value)}
            />
          </View>
        )}
        <Button className='login-button' onClick={handleSubmit}>
          {isLogin ? '登录' : '注册'}
        </Button>
      </View>
    </View>
  )
}