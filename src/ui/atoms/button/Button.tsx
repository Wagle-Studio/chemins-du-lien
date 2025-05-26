import './button.scss'

import React from 'react'
import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  size?: 'default' | 'small'
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({
  children,
  className,
  variant = 'primary',
  size = 'default',
  disabled = false,
  ...props
}) => {
  const finalClassName = clsx(
    'button',
    `button--${variant}`,
    `button--${size}`,
    `button--${disabled ? 'disabled' : 'active'}`,
    className,
  )

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  )
}
