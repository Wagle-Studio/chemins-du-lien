import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const IntroductionFaq: Block = {
  slug: 'introduction_faq',
  labels: {
    singular: 'Introduction FAQ',
    plural: 'Introductions FAQ',
  },
  imageURL: '/block_illustrations/block_introduction_faq.jpg',
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
    {
      name: 'subtitle',
      label: 'Sous-titre',
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
