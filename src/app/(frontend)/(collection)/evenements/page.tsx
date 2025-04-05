import React from 'react'
import { getCollection } from '@/utilities/payload-utils'
import { EventTeaser } from '@/ui/event-teaser/EventTeaser'

export default async function EventsPage() {
  const events = await getCollection('events', 1)

  return (
    <div className="collection_layout">
      <h2 className="collection_layout__title">Événements</h2>
      <div className="collection_layout__grid">
        <div className="collection_layout__grid__filter"></div>
        <div className="collection_layout__grid__list">
          {events.map((event) => (
            <EventTeaser key={event.id} data={event} variant="highlight" />
          ))}
        </div>
      </div>
    </div>
  )
}
