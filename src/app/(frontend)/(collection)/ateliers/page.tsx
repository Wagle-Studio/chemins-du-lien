import React from 'react'
import { getCollection } from '@/utilities/payload/collections'

export default async function EventsPage() {
  const categories = await getCollection('categories', 1)

  return <div></div>
  // return <EventList categories={categories} />
}
