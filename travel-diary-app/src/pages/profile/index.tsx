import React from 'react';
import './index.scss';

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="avatar">
          <img src="https://placeholder.com/150" alt="用户头像" />
        </div>
        <h2>用户昵称</h2>
        <p className="bio">这个人很懒，还没有写简介</p>
      </div>
      
      <div className="action-list">
        <div className="action-item">
          <span className="label">我的发布</span>
          <span className="arrow">›</span>
        </div>
        <div className="action-item">
          <span className="label">我的收藏</span>
          <span className="arrow">›</span>
        </div>
        <div className="action-item">
          <span className="label">设置</span>
          <span className="arrow">›</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;