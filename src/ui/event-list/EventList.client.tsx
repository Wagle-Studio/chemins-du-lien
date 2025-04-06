'use client'

import './style.scss'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Category, Event } from '@/payload-types'
import clsx from 'clsx'
import { EventsResponse } from '@/types/api'
import useFetcher from '@/hooks/useFetcher'
import { FiltersForm } from '@/forms/filters/FiltersForm.client'
import { FormValues } from '@/forms/filters/config'
import { EventTeaser } from '@/ui/event-teaser/EventTeaser'

interface EventListProps {
  categories: Category[]
}

export const EventList: React.FC<EventListProps> = ({ categories }) => {
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])

  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('categorie')

  const { fetcher, error, isLoading } = useFetcher<EventsResponse>()

  useEffect(() => {
    const fetchEvents = async () => {
      const params = new URLSearchParams()

      if (selectedCategory && selectedCategory !== 'tous-les-evenements') {
        params.set('category', selectedCategory)
      }

      const { data: events } = await fetcher(`/api/events?${params.toString()}`)

      if (events) setEvents(events)
    }

    fetchEvents()
  }, [selectedCategory])

  const handleFilterChanges = (data: FormValues) => {
    const params = new URLSearchParams(window.location.search)
    params.set('categorie', data.category)
    router.push(`/evenements?${params.toString()}`)
  }

  return (
    <div className="event_collection_layout">
      <h2 className="event_collection_layout__title">Événements</h2>
      <div className="event_collection_layout__grid">
        <div className="event_collection_layout__grid__results">
          <p>
            {events.length} {events.length > 1 ? 'résultats' : 'résultat'}
          </p>
        </div>
        <div className="event_collection_layout__grid__filter">
          <FiltersForm categories={categories} onSubmitForm={handleFilterChanges} />
        </div>
        <div className={clsx('event_collection_layout__grid__list', { loading_spiner: isLoading })}>
          {!error &&
            events.length >= 1 &&
            events.map((event) => <EventTeaser key={event.id} data={event} variant="highlight" />)}

          {!error && events.length === 0 && (
            <div className="event_collection_layout__grid__list__empty">
              <p className="event_collection_layout__grid__list__empty__msg">
                Aucun événement ne correspond à vos filtres.
              </p>
              <p className="event_collection_layout__grid__list__empty__msg">
                Essayez d’élargir votre recherche ou de réinitialiser les filtres.
              </p>
            </div>
          )}
          {error && (
            <div className="event_collection_layout__grid__list__error">
              <p className="event_collection_layout__grid__list__error__msg">
                Une erreur est survenue lors du chargement des événements.
              </p>
              <p className="event_collection_layout__grid__list__error__msg">
                Notre équipe technique a été informée et travaille à résoudre le problème.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
