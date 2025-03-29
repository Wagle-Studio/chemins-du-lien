import './style.scss'
import { Category as CategoryType } from '@/payload-types'
import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLElement> {
  category: CategoryType
}

export const Category: React.FC<Props> = ({ category, className, ...props }) => {
  return (
    <p className={clsx('category', className)} {...props}>
      {category.label}
    </p>
  )
}
