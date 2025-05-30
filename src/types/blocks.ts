import type { Homepage, Discover, About, Process } from '@/payload-types'

import { BookBlock } from '@/blocks/book/BookBlock'
import { RichTextBlock } from '@/blocks/rich-text/RichTextBlock'
import { FaqBlock } from '@/blocks/faq/FaqBlock'
import { FeedbackBlock } from '@/blocks/feedback/FeedbackBlock'
import { InstagramBlock } from '@/blocks/instagram/InstagramBlock'
import { IntroductionBlock } from '@/blocks/introduction/IntroductionBlock'
import { IntroductionWorkshopBlock } from '@/blocks/introduction-workshop/IntroductionWorkshopBlock'
import { IntroductionTeamBlock } from '@/blocks/introduction-team/IntroductionTeamBlock'
import { IntroductionFaqBlock } from '@/blocks/introduction-faq/IntroductionFaqBlock'
import { MembersBlock } from '@/blocks/members/MembersBlock'
import { WorkshopCharterBlock } from '@/blocks/workshop-charter/WorkshopCharterBlock'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type DiscoverBlocks = NonNullable<Discover['blocks']>[number]
export type AboutBlocks = NonNullable<About['blocks']>[number]
export type ProcessBlocks = NonNullable<Process['blocks']>[number]
export type AllBlocks = HomepageBlocks | DiscoverBlocks | AboutBlocks

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  book: BookBlock,
  content: RichTextBlock,
  faq: FaqBlock,
  feedback: FeedbackBlock,
  instagram: InstagramBlock,
  introduction: IntroductionBlock,
  introduction_workshop: IntroductionWorkshopBlock,
  introduction_team: IntroductionTeamBlock,
  introduction_faq: IntroductionFaqBlock,
  members: MembersBlock,
  workshop_charter: WorkshopCharterBlock,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
