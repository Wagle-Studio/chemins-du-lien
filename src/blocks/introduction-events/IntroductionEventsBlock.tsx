import { getCollectionWithParams } from '@/utilities/payload/collections'
import { IntroductionEvents } from '@/ui/organisms/introduction-events/IntroductionEvents'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_events'>

export const IntroductionEventsBlock = async (data: Props) => {
  const events = await getCollectionWithParams('events', {
    depth: 2,
    sort: 'date',
    limit: 3,
  })

  return <IntroductionEvents data={data} events={events} />
}
