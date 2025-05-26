import './link.scss'

import React, { ComponentProps } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ArrowRightIcon } from '@/ui/atoms/icons/ArrowRightIcon'
import { ExternalLinkIcon } from '@/ui/atoms/icons/ExternalLinkIcon'

interface Props extends ComponentProps<typeof NextLink> {
  variant?: 'default' | 'primary' | 'ghost'
  size?: 'default' | 'small'
  internalLink?: boolean
  externalLink?: boolean
}

export const Link: React.FC<Props> = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  internalLink = false,
  externalLink = false,
  ...props
}) => {
  return (
    <NextLink
      className={clsx(
        'link',
        `link--variant-${variant}`,
        `link--size-${size}`,
        { 'link--icon': internalLink || externalLink },
        className,
      )}
      {...props}
    >
      {!internalLink && !externalLink && <>{children}</>}
      {(internalLink || externalLink) && (
        <>
          <span className="link__content">{children}</span>
          {internalLink && <ArrowRightIcon className="link__icon" />}
          {externalLink && <ExternalLinkIcon className="link__icon" />}
        </>
      )}
    </NextLink>
  )
}
