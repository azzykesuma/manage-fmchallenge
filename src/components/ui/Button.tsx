import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`rounded-3xl font-bold shadow-lg py-3 px-8 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
