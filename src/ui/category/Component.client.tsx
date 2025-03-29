'use client'

import './style.scss'
import { Category as CategoryType } from '@/payload-types'

interface Props extends React.HTMLAttributes<HTMLElement> {
  category: CategoryType
}

export const Category: React.FC<Props> = ({ category }) => {
  return <p className="category">{category.label}</p>
}
