import Link from 'next/link';
import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary/50',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/50',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700 focus:ring-primary/50'
  };
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (href) {
    return <Link href={href} className={classes}>
        {children}
      </Link>;
  }
  return <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>;
};
export default Button;