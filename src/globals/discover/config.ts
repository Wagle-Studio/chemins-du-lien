import { GlobalConfig } from 'payload'
import { RichText } from '@/blocks/rich-text/config'
import { WorkshopCharter } from '@/blocks/workshop-charter/config'
import { Feedback } from '@/blocks/feedback/config'
import { Book } from '@/blocks/book/config'
import { IntroductionFaq } from '@/blocks/introduction-faq/config'

export const DiscoverPage: GlobalConfig = {
  slug: 'discover',
  label: 'Page découvrir',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Titre principal',
      type: 'text',
      required: true,
    },
    {
      name: 'introduction',
      label: 'Introduction',
      type: 'richText',
    },
    {
      name: 'blocks',
      label: 'Blocs de la page',
      type: 'blocks',
      blocks: [RichText, WorkshopCharter, Feedback, Book, IntroductionFaq],
    },
  ],
}
