'use client'

import './style.scss'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Category, Event } from '@/payload-types'
import clsx from 'clsx'
import { EventsResponse } from '@/types/response'
import useFetcher from '@/hooks/useFetcher'
import { EventFiltersForm } from '@/forms/event-filters/EventFiltersForm.client'
import { FormValues } from '@/forms/event-filters/config'
import { EventTeaser } from '@/ui/event-teaser/EventTeaser'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface EventListProps {
  categories: Category[]
}

gsap.registerPlugin(ScrollTrigger)

export const EventList: React.FC<EventListProps> = ({ categories }) => {
  const router = useRouter()
  const [events, setEvents] = useState<Event[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('categorie')

  const { fetcher, error, isLoading } = useFetcher<EventsResponse>()

  useEffect(() => {
    const fetchEvents = async () => {
      const params = new URLSearchParams()

      if (selectedCategory && selectedCategory !== 'tous-les-ateliers') {
        params.set('category', selectedCategory)
      }

      const { data: events } = await fetcher(`/api/events?${params.toString()}`)

      if (events) setEvents(events)
    }

    fetchEvents()
  }, [selectedCategory, fetcher])

  useEffect(() => {
    if (!listRef.current || events.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from(Array.from(listRef.current!.children), {
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 85%',
        },
        y: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, listRef)

    return () => ctx.revert()
  }, [events])

  const handleFilterChanges = (data: FormValues) => {
    const params = new URLSearchParams(window.location.search)
    params.set('categorie', data.category)
    router.push(`/ateliers?${params.toString()}`)
  }

  return (
    <section className="event_collection_layout">
      <h1 className="heading_1">Les ateliers</h1>
      <div className="event_collection_layout__grid">
        <div className="event_collection_layout__grid__results">
          <p>
            {events.length} {events.length > 1 ? 'résultats' : 'résultat'}
          </p>
        </div>
        <div className="event_collection_layout__grid__filter">
          <EventFiltersForm categories={categories} onSubmitForm={handleFilterChanges} />
        </div>
        <div
          ref={listRef}
          className={clsx('event_collection_layout__grid__list', { loading_spiner: isLoading })}
        >
          {!error &&
            events.length >= 1 &&
            events.map((event) => <EventTeaser key={event.id} data={event} variant="highlight" />)}

          {!error && events.length === 0 && (
            <div className="event_collection_layout__grid__list__empty">
              <p className="event_collection_layout__grid__list__empty__msg">
                Aucun atelier ne correspond à vos filtres.
              </p>
              <p className="event_collection_layout__grid__list__empty__msg">
                Essayez d’élargir votre recherche ou de réinitialiser les filtres.
              </p>
            </div>
          )}
          {error && (
            <div className="event_collection_layout__grid__list__error">
              <p className="event_collection_layout__grid__list__error__msg">
                Une erreur est survenue lors du chargement des ateliers.
              </p>
              <p className="event_collection_layout__grid__list__error__msg">
                Notre équipe technique a été informée et travaille à résoudre le problème.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
