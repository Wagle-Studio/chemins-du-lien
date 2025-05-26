import './tag.scss'

import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLElement> {
  label: string
  variant?: 'default' | 'gray'
  size?: 'default' | 'small'
}

export const Tag: React.FC<Props> = ({
  label,
  variant = 'default',
  size = 'default',
  className,
  ...props
}) => {
  return (
    <p
      className={clsx('tag', `tag-variant--${variant}`, `tag-size--${size}`, className)}
      {...props}
    >
      {label}
    </p>
  )
}
