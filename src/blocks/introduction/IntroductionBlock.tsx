import { Introduction } from '@/ui/organisms/introduction/Introduction'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction'>

export const IntroductionBlock = (data: Props) => {
  return <Introduction data={data} />
}
