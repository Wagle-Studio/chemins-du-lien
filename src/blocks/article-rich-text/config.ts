import { Block } from 'payload'
import { RichTextFull } from '@/fields/RichTextFull'

export const ArticleRichText: Block = {
  slug: 'article_rich_text',
  labels: {
    singular: 'Contenu libre',
    plural: 'Contenus libres',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_content.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    RichTextFull('richText', 'Contenu', true),
  ],
}
