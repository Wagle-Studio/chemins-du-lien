import type { Homepage, Discover } from '@/payload-types'

import { BookBlock } from '@/blocks/book/BookBlock'
import { RichTextBlock } from '@/blocks/rich-text/RichTextBlock'
import { FeedbackBlock } from '@/blocks/feedback/FeedbackBlock'
import { InstagramBlock } from '@/blocks/instagram/InstagramBlock'
import { IntroductionBlock } from '@/blocks/introduction/IntroductionBlock'
import { IntroductionEventsBlock } from '@/blocks/introduction-events/IntroductionEventsBlock'
import { IntroductionTeamBlock } from '@/blocks/introduction-team/IntroductionTeamBlock'
import { IntroductionFaqBlock } from '@/blocks/introduction-faq/IntroductionFaqBlock'
import { WorkshopCharterBlock } from '@/blocks/workshop-charter/WorkshopCharterBlock'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type DiscoverBlocks = NonNullable<Discover['blocks']>[number]
export type AllBlocks = HomepageBlocks | DiscoverBlocks

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  book: BookBlock,
  content: RichTextBlock,
  feedback: FeedbackBlock,
  instagram: InstagramBlock,
  introduction: IntroductionBlock,
  introduction_events: IntroductionEventsBlock,
  introduction_team: IntroductionTeamBlock,
  introduction_faq: IntroductionFaqBlock,
  workshop_charter: WorkshopCharterBlock,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
