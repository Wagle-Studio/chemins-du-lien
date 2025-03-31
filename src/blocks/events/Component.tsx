import { Event } from '@/payload-types'
import { getLatestEvents } from '@/utilities/payload-utils'
import { Events as EventsComponent } from '@/ui/blocks/events/Events'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'events'>

export const Events = async ({ type }: Props) => {
  let events: Event[] = []

  switch (type) {
    case 'Les trois prochains événements':
      events = await getLatestEvents()
      break
  }

  return <EventsComponent data={events} />
}
