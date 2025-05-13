import React from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

import homeIcon from '../../assets/icons/home.svg';
import followIcon from '../../assets/icons/follow.svg';
import postIcon from '../../assets/icons/post.svg';
import communityIcon from '../../assets/icons/community.svg';
import profileIcon from '../../assets/icons/profile.svg';

const BottomNav = () => {
  const currentPath = Taro.getCurrentInstance().router.path || '/';
  
  const navItems = [
    { icon: homeIcon, label: '首页', path: '/' },
    { icon: followIcon, label: '关注', path: '/follow' },
    { icon: postIcon, label: '发布', path: '/post' },
    { icon: communityIcon, label: '社区', path: '/community' },
    { icon: profileIcon, label: '我的', path: '/profile' }
  ];

  const handleNavClick = (path) => {
    Taro.switchTab({
      url: path
    });
  };

  return (
    <div className="bottom-nav">
      {navItems.map((item, index) => (
        <div
          key={item.path}
          className={`nav-item ${currentPath === item.path ? 'active' : ''} ${item.path === '/post' ? 'post-btn' : ''}`}
          onClick={() => handleNavClick(item.path)}
        >
          <img src={item.icon} alt={item.label} className="nav-icon" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNav;