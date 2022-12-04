import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

const ClickableIcon = ({ children, className, ...props }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      {...props}
      className={twMerge(
        'text-xl h-8 w-8 bg-gray-100 grid place-items-center rounded-full hover:bg-gray-200 transition-colors',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default ClickableIcon;
