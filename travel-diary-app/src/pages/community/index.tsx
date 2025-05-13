import React from 'react';
import './index.scss';

const CommunityPage: React.FC = () => {
  return (
    <div className="community-page">
      <h1>社区</h1>
      <div className="community-content">
        <div className="community-tabs">
          <span className="tab active">热门</span>
          <span className="tab">最新</span>
          <span className="tab">推荐</span>
        </div>
        <div className="posts-list">
          {/* 帖子列表将在这里渲染 */}
          <p className="empty-tip">暂无帖子内容</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;