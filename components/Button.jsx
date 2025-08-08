'use client';

import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const base =
    'p-2 font-medium transition-all whitespace-nowrap ';

  const variants = {
    primary: ' bg-gray-50 hover:bg-gray-100',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    blue: 'bg-indigo-600 text-white hover:bg-indigo-500',
    glass: 'bg-blue-100/20 backdrop-blur-sm border-white shadow-sm'
  };

  const sizes = {
    sm: 'text-sm',
    md: 'text-bae',
    lg: 'text-l',
  };

  return (
    <button
      className={clsx( base, variants[variant], sizes[size], className)}
      {...props}
      // onSubmit={handleSubmit}
    >
      {children}
    </button>
  );
}
