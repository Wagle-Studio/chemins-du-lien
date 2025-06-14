import { Block } from 'payload'
import { RichTextBase } from '@/fields/RichTextBase'

export const RichText: Block = {
  slug: 'rich_text',
  labels: {
    singular: 'Contenu libre',
    plural: 'Contenus libres',
  },
  imageURL: '/block_illustrations/block_content.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    RichTextBase('richText', 'Contenu', true),
  ],
}
