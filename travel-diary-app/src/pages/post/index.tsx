import React, { useState } from 'react';
import './index.scss';

const PostPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // TODO: 实现发布逻辑
    console.log('发布内容:', { title, content });
  };

  return (
    <div className="post-page">
      <h1>发布新内容</h1>
      <div className="post-form">
        <div className="form-item">
          <input
            type="text"
            placeholder="请输入标题"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-item">
          <textarea
            placeholder="分享你的旅行故事..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          发布
        </button>
      </div>
    </div>
  );
};

export default PostPage;