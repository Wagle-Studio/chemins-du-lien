import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const WorkshopCharter: Block = {
  slug: 'workshop_charter',
  labels: {
    singular: 'Charte de l’atelier',
    plural: 'Chartes des ateliers',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_workshop_charter.jpg',
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
    {
      name: 'item',
      label: 'Éléments de la charte',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          label: 'Titre de l’élément',
          type: 'text',
          required: true,
        },
        RichTextMinimal('description', 'Description', true),
      ],
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
