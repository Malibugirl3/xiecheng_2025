import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import './index.scss';

interface TextAreaProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  maxLength?: number;
  showCount?: boolean;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  className?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextArea: React.FC<TextAreaProps> = ({

  value,
  defaultValue = '',
  placeholder,
  disabled = false,
  readOnly = false,
  error = false,
  maxLength,
  showCount = false,
  autoSize = false,
  className,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) return;
    onChange?.(newValue);
    if (autoSize) {
      adjustHeight();
    }
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    let height = textarea.scrollHeight;

    if (typeof autoSize === 'object') {
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const minHeight = (autoSize.minRows || 1) * lineHeight;
      const maxHeight = autoSize.maxRows ? autoSize.maxRows * lineHeight : Infinity;

      height = Math.max(minHeight, Math.min(height, maxHeight));
    }

    textarea.style.height = `${height}px`;
  };

  useEffect(() => {
    if (autoSize) {
      adjustHeight();
    }
  }, [value, autoSize]);

  const textareaClass = classNames(
    'td-textarea',
    {
      'td-textarea--focused': focused,
      'td-textarea--disabled': disabled,
      'td-textarea--error': error,
    },
    className
  );

  const currentLength = (value || '').length;

  return (
    <div className={textareaClass}>
      <textarea
        ref={textareaRef}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        className="td-textarea__inner"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {showCount && (
        <span className="td-textarea__count">
          {currentLength}{maxLength ? `/${maxLength}` : ''}
        </span>
      )}
    </div>
  );
};

export default TextArea;