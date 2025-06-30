import './workshop-list-teaser.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import { Workshop } from '@/payload-types'
import { WorkshopTeaser } from '@/ui/molecules/workshop-teaser/WorkshopTeaser'
import { useWorkshopListTeaserAnimation } from './useWorkshopListTeaserAnimation'

type Props = {
  data: Workshop[]
  isLoading: boolean
  isError: string | null
} & React.HTMLAttributes<HTMLDivElement>

export const WorkshopListTeaser: React.FC<Props> = ({
  data,
  isLoading = false,
  isError = null,
  className,
  ...props
}) => {
  const workshopsListRef = useRef<HTMLUListElement>(null)

  useWorkshopListTeaserAnimation(workshopsListRef, data)

  return (
    <div className={clsx(className, 'workshop_list_teaser', { loading_spiner: isLoading })} {...props}>
      {!isError && !isLoading && data.length >= 1 && (
        <ul ref={workshopsListRef} className="workshop_list_teaser__list">
          {data.map((workshop) => (
            <li key={workshop.id}>
              <WorkshopTeaser key={workshop.id} data={workshop} variant="highlight" />
            </li>
          ))}
        </ul>
      )}
      {!isError && isLoading && (
        <div className="workshop_list_teaser__loading">
          <p className="workshop_list_teaser__loading__msg">Chargement des ateliers.</p>
        </div>
      )}
      {!isError && !isLoading && data.length === 0 && (
        <div className="workshop_list_teaser__empty">
          <p className="workshop_list_teaser__empty__msg">
            Aucun atelier ne correspond à vos filtres.
          </p>
          <p className="workshop_list_teaser__empty__msg">
            Essayez d’élargir votre recherche ou de réinitialiser les filtres.
          </p>
        </div>
      )}
      {isError && !isLoading && (
        <div className="workshop_list_teaser__error">
          <p className="workshop_list_teaser__error__msg">
            Une erreur est survenue lors du chargement des ateliers.
          </p>
          <p className="workshop_list_teaser__error__msg">
            Notre équipe technique a été informée et travaille à résoudre le problème.
          </p>
        </div>
      )}
    </div>
  )
}
