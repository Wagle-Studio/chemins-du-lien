import { GlobalConfig } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'
import { Process } from '@/blocks/process/config'
import { RichText } from '@/blocks/rich-text/config'
import { WorkshopCharter } from '@/blocks/workshop-charter/config'
import { Feedback } from '@/blocks/feedback/config'
import { Book } from '@/blocks/book/config'
import { IntroductionFaq } from '@/blocks/introduction-faq/config'
import { SEOFields } from '@/fields/SEOFields'

export const DiscoverPage: GlobalConfig = {
  slug: 'discover',
  label: 'Page découvrir',
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenu',
          fields: [
            {
              name: 'banner',
              label: 'Image de banière',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              label: 'Titre principal',
              type: 'text',
              required: true,
            },
            RichTextMinimal('introduction', 'Introduction', true),
            {
              name: 'blocks',
              label: 'Blocs de la page',
              type: 'blocks',
              blocks: [Process, RichText, WorkshopCharter, Feedback, Book, IntroductionFaq],
            },
          ],
        },
        ...SEOFields.tabs,
      ],
    },
  ],
}
