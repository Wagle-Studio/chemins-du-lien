import { GlobalConfig } from 'payload'
import { RichText } from '@/blocks/rich-text/config'
import { WorkshopCharter } from '@/blocks/workshop-charter/config'
import { Feedback } from '@/blocks/feedback/config'
import { Book } from '@/blocks/book/config'
import { IntroductionFaq } from '@/blocks/introduction-faq/config'

export const DiscoverPage: GlobalConfig = {
  slug: 'discover',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'introduction',
      type: 'richText',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [RichText, WorkshopCharter, Feedback, Book, IntroductionFaq],
    },
  ],
}
