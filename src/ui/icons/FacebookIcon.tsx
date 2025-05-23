import './style.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export const FacebookIcon: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...props }) => {
  return (
    <svg className={clsx('icon', className)} {...props} viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  )
}
