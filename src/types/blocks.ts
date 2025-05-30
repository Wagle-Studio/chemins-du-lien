import type { Homepage, Discover, About, Process } from '@/payload-types'

import { ArticleRichTextBlock } from '@/blocks/article-rich-text/RichTextBlock'
import { ArticleRichTextPictureBlock } from '@/blocks/article-rich-text-picture/ArticleRichTextPictureBlock'
import { BookBlock } from '@/blocks/book/BookBlock'
import { FaqBlock } from '@/blocks/faq/FaqBlock'
import { FeedbackBlock } from '@/blocks/feedback/FeedbackBlock'
import { InstagramBlock } from '@/blocks/instagram/InstagramBlock'
import { IntroductionBlock } from '@/blocks/introduction/IntroductionBlock'
import { IntroductionWorkshopBlock } from '@/blocks/introduction-workshop/IntroductionWorkshopBlock'
import { IntroductionTeamBlock } from '@/blocks/introduction-team/IntroductionTeamBlock'
import { IntroductionFaqBlock } from '@/blocks/introduction-faq/IntroductionFaqBlock'
import { MembersBlock } from '@/blocks/members/MembersBlock'
import { RichTextBlock } from '@/blocks/rich-text/RichTextBlock'
import { WorkshopCharterBlock } from '@/blocks/workshop-charter/WorkshopCharterBlock'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type DiscoverBlocks = NonNullable<Discover['blocks']>[number]
export type AboutBlocks = NonNullable<About['blocks']>[number]
export type ProcessBlocks = NonNullable<Process['blocks']>[number]
export type AllBlocks = HomepageBlocks | DiscoverBlocks | AboutBlocks | ProcessBlocks

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  article_rich_text: ArticleRichTextBlock,
  article_rich_text_picture: ArticleRichTextPictureBlock,
  book: BookBlock,
  faq: FaqBlock,
  feedback: FeedbackBlock,
  instagram: InstagramBlock,
  introduction: IntroductionBlock,
  introduction_workshop: IntroductionWorkshopBlock,
  introduction_team: IntroductionTeamBlock,
  introduction_faq: IntroductionFaqBlock,
  members: MembersBlock,
  rich_text: RichTextBlock,
  workshop_charter: WorkshopCharterBlock,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
