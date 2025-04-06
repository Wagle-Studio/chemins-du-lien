import { Event } from '@/payload-types'
import { getCollectionWithParams } from '@/utilities/payload/collections'
import { EventsBlock } from '@/ui/blocks/events-block/EventsBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'events'>

export const Events = async ({ type }: Props) => {
  let events: Event[] = []

  switch (type) {
    case 'Les trois prochains événements':
      events = await getCollectionWithParams('events', {
        depth: 2,
        sort: 'date',
        limit: 3,
      })
      break
  }

  return <EventsBlock data={events} />
}
