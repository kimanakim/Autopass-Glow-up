import * as React from 'react';

export const Button: React.FC<{
  className?: string;
  children?: React.ReactElement | React.ReactElement[];
  isActive?: boolean,
  onClick?: () => void;
}> = ({ className, children, isActive, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      className={`${className} flex flex-col items-center justify-center rounded-lg bg-autopass drop-shadow-autopass ${isActive ? '-translate-x-6px translate-y-7px bg-autopass-dark drop-shadow-none' : ''} active:-translate-x-6px active:translate-y-7px active:bg-autopass-dark active:drop-shadow-none`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
