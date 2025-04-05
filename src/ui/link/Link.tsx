import './style.scss'
import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'

interface Props extends ComponentProps<typeof NextLink> {
  variant?: 'default' | 'primary' | 'ghost'
  size?: 'default' | 'small'
}

export const Link: React.FC<Props> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <NextLink
      className={clsx('link', `link--variant-${variant}`, `link--size-${size}`, className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}
