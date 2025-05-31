// TODO : handle empty, loading, error ... cases like WorkshopListTeaser.

import './workshop-list-highlight.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import { Workshop } from '@/payload-types'
import { WorkshopTeaser } from '@/ui/molecules/workshop-teaser/WorkshopTeaser'
import { useWorkshopListHighlightAnimation } from './useWorkshopListHighlightAnimation'

type Props = {
  data: Workshop[]
} & React.HTMLAttributes<HTMLUListElement>

export const WorkshopListHighlight: React.FC<Props> = ({ data, className, ...props }) => {
  const workshopsListRef = useRef<HTMLUListElement>(null)

  useWorkshopListHighlightAnimation(workshopsListRef)

  return (
    <ul ref={workshopsListRef} className={clsx('workshop_list_highlight', className)} {...props}>
      {data.map((workshop, index) => (
        <li key={workshop.id} className="workshop_list_highlight__item">
          <WorkshopTeaser data={workshop} variant={index === 0 ? 'highlight' : 'default'} />
        </li>
      ))}
    </ul>
  )
}
