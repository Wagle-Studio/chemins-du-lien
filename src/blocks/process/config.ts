import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const Process: Block = {
  slug: 'process',
  labels: {
    singular: 'Roue du processus',
    plural: 'Roues du processus',
  },
  imageURL: '/block_illustrations/block_process.jpg',
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
      name: 'stapes',
      label: 'Étapes du processus',
      type: 'array',
      minRows: 4,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          label: "Titre de l'étape",
          type: 'text',
          required: true,
        },
        RichTextMinimal('description', 'Description', true),
      ],
    },
  ],
}
