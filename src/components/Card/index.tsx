import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface CardProps {
  title?: React.ReactNode;
  cover?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  hoverable?: boolean;
  bordered?: boolean;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  cover,
  extra,
  children,
  hoverable = false,
  bordered = true,
  className,
  onClick,
}) => {
  const cardClass = classNames(
    'td-card',
    {
      'td-card--hoverable': hoverable,
      'td-card--bordered': bordered,
    },
    className
  );

  return (
    <div className={cardClass} onClick={onClick}>
      {cover && <div className="td-card__cover">{cover}</div>}
      {(title || extra) && (
        <div className="td-card__header">
          {title && <div className="td-card__title">{title}</div>}
          {extra && <div className="td-card__extra">{extra}</div>}
        </div>
      )}
      {children && <div className="td-card__body">{children}</div>}
    </div>
  );
};

export default Card;