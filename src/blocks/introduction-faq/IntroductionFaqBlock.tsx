import { IntroductionFaq } from '@/ui/organisms/introduction-faq/IntroductionFaq'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_faq'>

export const IntroductionFaqBlock = (data: Props) => {
  return <IntroductionFaq data={data} />
}
