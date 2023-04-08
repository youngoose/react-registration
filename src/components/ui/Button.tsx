import React from 'react';

export default function Button({
  customStyle,
  text,
  type,
  onClick,
  disabled,
}: {
  customStyle: any;
  text: string;
  type?: any;
  onClick: any;
  disabled?: any;
}) {
  return (
    <button
      className={customStyle}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
