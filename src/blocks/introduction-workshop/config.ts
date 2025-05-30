import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const IntroductionWorkshop: Block = {
  slug: 'introduction_workshop',
  labels: {
    singular: 'Introduction aux ateliers',
    plural: 'Introductions aux ateliers',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_introduction_ateliers.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    RichTextMinimal('description', 'Description', true),
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
