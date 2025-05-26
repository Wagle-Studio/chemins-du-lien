import { Feedback } from '@/ui/organisms/feedback/Feedback'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'feedback'>

export const FeedbackBlock = (data: Props) => {
  return <Feedback data={data} />
}
