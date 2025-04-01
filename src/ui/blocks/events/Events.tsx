import './style.scss'
import { Event } from '@/payload-types'
import clsx from 'clsx'
import { Category } from '@/ui/category/Category'
import { Link } from '@/ui/link/Link'

type Props = {
  data: Event[]
}

export const Events: React.FC<Props> = ({ data }) => {
  const formatdDate = (rawDate: string) => {
    const date = new Date(rawDate)

    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)
  }

  return (
    <div className="events">
      <h2 className="events__title">Événements à venir</h2>
      <ul className="events__list">
        {data.map((event, index) => (
          <li
            key={event.id}
            className={clsx(
              'events__list__item',
              index === 0 ? 'events__list__item--highlight' : 'events__list__item--teaser',
            )}
          >
            <div className="events__list__item__header">
              <div className="events__list__item__header__top">
                <h3>{event.title}</h3>
                <p>{event['on-site'] ? 'présentiel' : 'visio conférence'}</p>
              </div>
              <div className="events__list__item__header__bottom">
                <p>{formatdDate(event.date)}</p>
                <p>{event.status.toLowerCase()}</p>
              </div>
            </div>
            <div className="events__list__item__body">
              <div className="events__list__item__body__content">
                {index === 0 && (
                  <div className="events__list__item__body__content__description">
                    {event.description}
                  </div>
                )}
                <ul className="events__list__item__body__content__categories">
                  {event.categories?.map(
                    (category) =>
                      typeof category !== 'number' && (
                        <li key={category.id}>
                          <Category category={category} />
                        </li>
                      ),
                  )}
                </ul>
              </div>
              {index == 0 && (
                <div className="events__list__item__body__footer">
                  <Link href="#" variant="primary">
                    S'inscrire
                  </Link>
                  <p>
                    Il reste
                    <span className="events__list__item__body__footer__cta">
                      4 places disponibles
                    </span>
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <Link href="#" variant="primary">
        Voir tous les événements
      </Link>
    </div>
  )
}
