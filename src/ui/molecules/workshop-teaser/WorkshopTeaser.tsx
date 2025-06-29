import './workshop-teaser.scss'

import clsx from 'clsx'
import { Workshop } from '@/payload-types'
import { Tag } from '@/ui/atoms/tag/Tag'
import { Link } from '@/ui/atoms/link/Link'

type Props = {
  variant?: 'default' | 'highlight'
  data: Workshop
} & React.HTMLAttributes<HTMLElement>

export const WorkshopTeaser: React.FC<Props> = ({
  variant = 'default',
  data,
  className,
  ...props
}) => {
  return (
    <article
      className={clsx(
        'workshop_teaser',
        variant === 'default' ? 'workshop_teaser--teaser' : 'workshop_teaser--highlight',
        className,
      )}
      {...props}
    >
      <div className="workshop_teaser__header">
        <div className="workshop_teaser__header__top">
          <h3 className="heading_3">{data.title}</h3>
          <Tag label={generateTypeLabel(data.type)} variant="gray" size="small" />
        </div>
        <div className="workshop_teaser__header__bottom">
          <p>{formatDate(data.date)}</p>
          <p
            className={clsx(
              'workshop_teaser__header__bottom__status',
              generateStatusClass(data.state),
            )}
          >
            {generateStatusLabel(data.state)}
          </p>
        </div>
      </div>
      <div className="workshop_teaser__body">
        <div className="workshop_teaser__body__content">
          {variant === 'highlight' && (
            <div className="workshop_teaser__body__content__description">{data.description}</div>
          )}
          <ul className="workshop_teaser__body__content__categories">
            {data.categories?.map(
              (category) =>
                typeof category !== 'number' && (
                  <li key={category.id}>
                    <Tag label={category.title} />
                  </li>
                ),
            )}
          </ul>
        </div>
        {variant === 'highlight' && registrationIsOpen(data.state) && (
          <div className="workshop_teaser__body__footer">
            <Link href={data['form-url']} target="_blank" variant="primary" externalLink>
              S&apos;inscrire
            </Link>
            <p>
              Il reste
              <span className="workshop_teaser__body__footer__cta">4 places disponibles</span>
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

const formatDate = (rawDate: string): string => {
  const date = new Date(rawDate)

  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
  }).format(date)
}

const generateTypeLabel = (type: string): string => {
  switch (type) {
    case 'in_person':
      return 'présentiel'
    case 'remote':
      return 'visio'
    case 'hybrid':
      return 'présentiel + visio'
    case 'other':
      return 'autre'
    default:
      return ''
  }
}

const generateStatusClass = (status: string): string => {
  const classBase = 'workshop_teaser__header__bottom__status'

  switch (status) {
    case 'programmed':
    case 'confirmed':
      return `${classBase}--success`
    case 'canceled':
      return `${classBase}--error`
    case 'reported':
      return `${classBase}--warning`
    default:
      return ''
  }
}

const generateStatusLabel = (status: string): string => {
  switch (status) {
    case 'programmed':
      return 'programmé'
    case 'confirmed':
      return 'confirmé'
    case 'canceled':
      return 'annulé'
    case 'reported':
      return 'Reporté'
    default:
      return ''
  }
}

const registrationIsOpen = (status: string): boolean => {
  return ['programmed', 'confirmed'].includes(status)
}
