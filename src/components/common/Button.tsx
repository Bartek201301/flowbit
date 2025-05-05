import React, { memo, forwardRef } from 'react';
import Link from 'next/link';

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: 'button';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: 'link';
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: '_blank' | '_self';
  rel?: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

// Stałe obiekty ze stylami, aby uniknąć tworzenia ich za każdym razem
// Kolory zostały dostosowane, aby zapewnić lepszy kontrast (min. 4.5:1 dla tekstu)
const variantStyles = {
  primary: 'bg-gradient-to-r from-flowbit-500 to-flowbit-700 text-white hover:from-flowbit-600 hover:to-flowbit-800 focus:ring-flowbit-400 primary-gradient',
  secondary: 'bg-flowbit-100 text-flowbit-800 hover:bg-flowbit-200 focus:ring-flowbit-300',
  outline: 'border-2 border-flowbit-500 text-flowbit-700 hover:bg-flowbit-50 focus:ring-flowbit-400',
  text: 'text-flowbit-700 hover:text-flowbit-800 hover:underline focus:ring-flowbit-400 bg-transparent',
};

const sizeStyles = {
  sm: 'text-sm px-3 py-1.5',
  md: 'px-5 py-2.5',
  lg: 'text-lg px-6 py-3',
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const {
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    icon,
    iconPosition = 'left',
    ariaLabel,
  } = props;

  // Podstawowe klasy dla wszystkich wariantów przycisku
  const baseClasses = [
    'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    disabled ? 'opacity-70 cursor-not-allowed' : '',
    className,
  ].filter(Boolean).join(' ');

  // Style bezpośrednie dla wariantu primary aby zapewnić działanie gradientu
  const inlineStyle = variant === 'primary' ? {
    background: 'linear-gradient(to right, #813CB9, #652F90)'
  } : {};

  // Renderowanie ikony
  const renderIcon = () => {
    if (!icon) return null;
    
    const iconElement = (
      <span className={`${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`} aria-hidden="true">
        {icon}
      </span>
    );
    
    return iconElement;
  };

  // Renderowanie treści przycisku
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );

  // Renderowanie przycisku jako przycisk (button)
  if (props.as !== 'link') {
    const { onClick, type = 'button' } = props;
    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={baseClasses}
        onClick={onClick}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        style={inlineStyle}
      >
        {buttonContent}
      </button>
    );
  }

  // Renderowanie przycisku jako link
  const { href, onClick, target, rel } = props;
  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      className={baseClasses}
      aria-label={ariaLabel}
      style={inlineStyle}
    >
      {buttonContent}
    </Link>
  );
});

Button.displayName = 'Button';

export default memo(Button);