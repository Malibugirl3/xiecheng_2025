import React from 'react';
import './index.scss';

const FollowPage: React.FC = () => {
  return (
    <div className="follow-page">
      <h1>关注</h1>
      <div className="follow-content">
        {/* 关注列表将在这里渲染 */}
        <p>暂无关注内容</p>
      </div>
    </div>
  );
};

export default FollowPage;