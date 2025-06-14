import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const Introduction: Block = {
  slug: 'introduction',
  labels: {
    singular: 'Introduction page accueil',
    plural: 'Introductions page accueil',
  },
  imageURL: '/block_illustrations/block_introduction.jpg',
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
