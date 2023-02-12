import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  variant?: 'lg' | 'sm';
}

export const Button = ({
  variant = 'sm',
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'> & ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(
        'rounded-md text-lg bg-white text-[#2258A2]',
        className,
        props.disabled && 'opacity-90 brightness-90 cursor-not-allowed select-none',
        variant === 'sm' && 'shadow-md shadow-[#2A8CC3] py-1 px-2',
        variant === 'lg' && 'shadow-lg shadow-[#2A8CC3]/50 py-2 px-8',
      )}
    >
      {children}
    </button>
  );
};
