import type { Homepage, Discover, Contact, Process } from '@/payload-types'

import { ArticleNextWorkshopsBlock } from '@/blocks/article-next-workshops/ArticleNextWorkshopsBlock'
import { validateArticleNextWorkshopBlock } from '@/ui/organisms/article-next-workshops/validateArticleNextWorkshopBlock'

import { ArticleRichTextBlock } from '@/blocks/article-rich-text/RichTextBlock'
import { validateArticleRichTextBlock } from '@/ui/organisms/rich-text/validateArticleRichTextBlock'

import { ArticleRichTextPictureBlock } from '@/blocks/article-rich-text-picture/ArticleRichTextPictureBlock'
import { validateArticleRichTextPictureBlock } from '@/ui/organisms/article-rich-text-picture/validateArticleRichTextPictureBlock'

import { BookBlock } from '@/blocks/book/BookBlock'
import { validateBookBlock } from '@/ui/organisms/book/validateBookBlock'

import { ContactFormBlock } from '@/blocks/contact-form/ContactFormBlock'

import { FaqBlock } from '@/blocks/faq/FaqBlock'
import { validateFaqBlock } from '@/ui/organisms/faq/validateFaqBlock'

import { FeedbackBlock } from '@/blocks/feedback/FeedbackBlock'
import { validateFeedbackBlock } from '@/ui/organisms/feedback/validateFeedbackBlock'

import { InstagramBlock } from '@/blocks/instagram/InstagramBlock'
import { validateInstagramBlock } from '@/ui/organisms/instagram/validateInstagramBlock'

import { IntroductionBlock } from '@/blocks/introduction/IntroductionBlock'
import { validateIntroductionBlock } from '@/ui/organisms/introduction/validateIntroductionBlock'

import { IntroductionWorkshopBlock } from '@/blocks/introduction-workshop/IntroductionWorkshopBlock'
import { validateIntroductionWorkshopBlock } from '@/ui/organisms/introduction-workshop/validateIntroductionWorkshopBlock'

import { IntroductionTeamBlock } from '@/blocks/introduction-team/IntroductionTeamBlock'
import { validateIntroductionTeamBlock } from '@/ui/organisms/introduction-team/validateIntroductionTeamBlock'

import { IntroductionFaqBlock } from '@/blocks/introduction-faq/IntroductionFaqBlock'
import { validateIntroductionFaqBlock } from '@/ui/organisms/introduction-faq/validateIntroductionFaqBlock'

import { MembersBlock } from '@/blocks/members/MembersBlock'
import { validateMembersBlock } from '@/ui/organisms/members/validateMembersBlock'

import { ProcessBlock } from '@/blocks/process/ProcessBlock'
import { validateProcessBlock } from '@/ui/organisms/process/validateProcessBlock'

import { RichTextBlock } from '@/blocks/rich-text/RichTextBlock'

import { WorkshopCharterBlock } from '@/blocks/workshop-charter/WorkshopCharterBlock'
import { validateWorkshopCharterBlock } from '@/ui/organisms/workshop-charter/validateWorkshopCharterBlock'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type DiscoverBlocks = NonNullable<Discover['blocks']>[number]
export type ContactBlocks = NonNullable<Contact['blocks']>[number]
export type ProcessBlocks = NonNullable<Process['blocks']>[number]
export type AllBlocks = HomepageBlocks | DiscoverBlocks | ContactBlocks | ProcessBlocks

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  article_next_workshops: ArticleNextWorkshopsBlock,
  article_rich_text: ArticleRichTextBlock,
  article_rich_text_picture: ArticleRichTextPictureBlock,
  book: BookBlock,
  contact_form: ContactFormBlock,
  faq: FaqBlock,
  feedback: FeedbackBlock,
  instagram: InstagramBlock,
  introduction: IntroductionBlock,
  introduction_workshop: IntroductionWorkshopBlock,
  introduction_team: IntroductionTeamBlock,
  introduction_faq: IntroductionFaqBlock,
  members: MembersBlock,
  process: ProcessBlock,
  rich_text: RichTextBlock,
  workshop_charter: WorkshopCharterBlock,
}

export const blockValidators: {
  [K in AllBlocks['blockType']]?: (block: Extract<AllBlocks, { blockType: K }>) => boolean
} = {
  article_next_workshops: validateArticleNextWorkshopBlock,
  article_rich_text: validateArticleRichTextBlock,
  article_rich_text_picture: validateArticleRichTextPictureBlock,
  book: validateBookBlock,
  faq: validateFaqBlock,
  feedback: validateFeedbackBlock,
  instagram: validateInstagramBlock,
  introduction: validateIntroductionBlock,
  introduction_workshop: validateIntroductionWorkshopBlock,
  introduction_team: validateIntroductionTeamBlock,
  introduction_faq: validateIntroductionFaqBlock,
  members: validateMembersBlock,
  process: validateProcessBlock,
  workshop_charter: validateWorkshopCharterBlock,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
