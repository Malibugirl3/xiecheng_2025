import React from 'react';
import classNames from 'classnames';
import './index.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  block = false,
  className,
  onClick,
}) => {
  const buttonClass = classNames(
    'td-button',
    `td-button--${type}`,
    `td-button--${size}`,
    {
      'td-button--disabled': disabled,
      'td-button--loading': loading,
      'td-button--block': block,
    },
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading && <span className="td-button__loading"></span>}
      <span className="td-button__text">{children}</span>
    </button>
  );
};

export default Button;