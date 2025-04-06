import React from 'react'
import { getCollection } from '@/utilities/payload-utils'
import { EventList } from '@/ui/event-list/EventList.client'

export default async function EventsPage() {
  const categories = await getCollection('categories', 1)

  return <EventList categories={categories} />
}
