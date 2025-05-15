import { View, Text } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import { Input, Button } from '../../components'
import './index.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (!username || !password) {
      return
    }
    // 这里应该调用登录API，暂时模拟登录成功
    Taro.navigateTo({
      url: '/pages/mobile/home/index'
    })
  }

  return (
    <View className='login-page'>
      <View className='login-container'>
        <Text className='title'>耕录</Text>
        <Input
          type='text'
          placeholder='请输入用户名'
          value={username}
          onChange={(e: { detail: { value: string } }) => setUsername(e.detail.value)}
        />
        <Input
          type='password'
          placeholder='请输入密码'
          value={password}
          onChange={(e: { detail: { value: string } }) => setPassword(e.detail.value)}
        />
        <Button onClick={handleLogin}>登录</Button>
      </View>
    </View>
  )
}

export default Login