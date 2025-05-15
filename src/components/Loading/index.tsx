import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  text,
  fullScreen = false,
  className,
}) => {
  const loadingClass = classNames(
    'td-loading',
    `td-loading--${size}`,
    {
      'td-loading--fullscreen': fullScreen,
    },
    className
  );

  const content = (
    <div className={loadingClass}>
      <div className="td-loading__spinner">
        <svg viewBox="0 0 50 50" className="td-loading__circular">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            className="td-loading__path"
          />
        </svg>
      </div>
      {text && <p className="td-loading__text">{text}</p>}
    </div>
  );

  return fullScreen ? (
    <div className="td-loading-mask">{content}</div>
  ) : (
    content
  );
};

export default Loading;