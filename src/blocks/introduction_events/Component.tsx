import { getCollectionWithParams } from '@/utilities/payload/collections'
import { IntroductionEventsBlock } from '@/ui/blocks/introduction-events-block/IntroductionEventsBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_events'>

export const IntroductionEvents = async (data: Props) => {
  const events = await getCollectionWithParams('events', {
    depth: 2,
    sort: 'date',
    limit: 3,
  })

  return <IntroductionEventsBlock data={data} events={events} />
}
