import { IntroductionBlock } from '@/ui/blocks/introduction-block/IntroductionBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction'>

export const Introduction = async (data: Props) => {
  return <IntroductionBlock data={data} />
}
