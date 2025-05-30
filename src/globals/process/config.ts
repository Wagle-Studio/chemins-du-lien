import { GlobalConfig } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'
import { ArticleRichText } from '@/blocks/article-rich-text/config'
import { ArticleRichTextPicture } from '@/blocks/article-rich-text-picture/config'

export const ProcessPage: GlobalConfig = {
  slug: 'process',
  label: 'Page processus',
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
    RichTextMinimal('introduction', 'Introduction', true),
    {
      name: 'blocks',
      label: 'Blocs de la page',
      type: 'blocks',
      blocks: [ArticleRichText, ArticleRichTextPicture],
    },
  ],
}
