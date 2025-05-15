import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import './index.scss';

interface InputProps {
  value?: string;
  defaultValue?: string;
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  maxLength?: number;
  className?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onChange?: (e: { detail: { value: string } }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onPressEnter?: () => void;
}

const Input: React.FC<InputProps> = ({
  value,
  defaultValue = '',
  type = 'text',
  placeholder,
  disabled = false,
  readOnly = false,
  error = false,
  maxLength,
  className,
  prefix,
  suffix,
  onChange,
  onFocus,
  onBlur,
  onPressEnter,
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    const newValue = typeof e === 'object' ? e.detail.value : e;
    onChange?.({ detail: { value: newValue } });
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.();
    }
  };

  const inputClass = classNames(
    'td-input',
    {
      'td-input--focused': focused,
      'td-input--disabled': disabled,
      'td-input--error': error,
      'td-input--with-prefix': prefix,
      'td-input--with-suffix': suffix,
    },
    className
  );

  return (
    <div className={inputClass}>
      {prefix && <div className="td-input__prefix">{prefix}</div>}
      <input
        ref={inputRef}
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        className="td-input__inner"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {suffix && <div className="td-input__suffix">{suffix}</div>}
    </div>
  );
};

export default Input;