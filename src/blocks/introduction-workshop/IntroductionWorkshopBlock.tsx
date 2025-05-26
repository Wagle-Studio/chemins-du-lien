import { getCollectionWithParams } from '@/utilities/payload/collections'
import { IntroductionWorkshop } from '@/ui/organisms/introduction-workshop/IntroductionWorkshop'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_workshop'>

export const IntroductionWorkshopBlock = async (data: Props) => {
  const workshops = await getCollectionWithParams('workshops', {
    depth: 2,
    sort: 'date',
    limit: 3,
  })

  return <IntroductionWorkshop data={data} workshops={workshops} />
}
