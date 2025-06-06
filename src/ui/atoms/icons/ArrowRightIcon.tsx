import './icon.scss'

import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export const ArrowRightIcon: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...props }) => {
  return (
    <svg className={clsx('icon', className)} {...props} viewBox="0 0 512 512">
      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
    </svg>
  )
}
