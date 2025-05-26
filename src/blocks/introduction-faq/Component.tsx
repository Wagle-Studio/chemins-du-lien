import { IntroductionFaqBlock } from '@/ui/blocks/introduction-faq/IntroductionBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_faq'>

export const IntroductionFaq = async (data: Props) => {
  return <IntroductionFaqBlock data={data} />
}
