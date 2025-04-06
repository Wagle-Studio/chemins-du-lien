import { Event } from '@/payload-types'
import { getLatestEvents } from '@/utilities/payload/shortcuts'
import { EventsBlock } from '@/ui/blocks/events-block/EventsBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'events'>

export const Events = async ({ type }: Props) => {
  let events: Event[] = []

  switch (type) {
    case 'Les trois prochains événements':
      events = await getLatestEvents()
      break
  }

  return <EventsBlock data={events} />
}
