import { GlobalConfig } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'
import { ArticleRichText } from '@/blocks/article-rich-text/config'
import { ArticleRichTextPicture } from '@/blocks/article-rich-text-picture/config'
import { ArticleNextWorkshops } from '@/blocks/article-next-workshops/config'
import { IntroductionFaq } from '@/blocks/introduction-faq/config'
import { Book } from '@/blocks/book/config'
import { Instagram } from '@/blocks/instagram/config'
import { SEOFields } from '@/fields/SEOFields'

export const ProcessPage: GlobalConfig = {
  slug: 'process',
  label: 'Page processus',
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
              blocks: [
                ArticleRichText,
                ArticleRichTextPicture,
                ArticleNextWorkshops,
                IntroductionFaq,
                Book,
                Instagram,
              ],
            },
          ],
        },
        ...SEOFields.tabs,
      ],
    },
  ],
}
