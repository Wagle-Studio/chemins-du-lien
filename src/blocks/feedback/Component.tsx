import { FeedbackBlock } from '@/ui/blocks/feedback-block/FeedbackBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'feedback'>

export const Feedback = async (data: Props) => {
  return <FeedbackBlock data={data} />
}
