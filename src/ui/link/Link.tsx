import './style.scss'
import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'

interface Props extends ComponentProps<typeof NextLink> {
  variant?: 'default' | 'primary' | 'ghost'
  size?: 'default' | 'small'
  internalLink?: boolean
}

export const Link: React.FC<Props> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  internalLink = false,
  ...props
}) => {
  return (
    <NextLink
      className={clsx(
        'link',
        `link--variant-${variant}`,
        `link--size-${size}`,
        { 'link--icon': internalLink },
        className,
      )}
      {...props}
    >
      {!internalLink && <>{children}</>}
      {internalLink && (
        <>
          <span className="link__content">{children}</span>
          <ArrowRightIcon className="link__icon" />
        </>
      )}
    </NextLink>
  )
}
