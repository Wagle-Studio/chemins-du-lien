import { Block } from 'payload'
import { RichTextBase } from '@/fields/RichTextBase'

export const Feedback: Block = {
  slug: 'feedback',
  labels: {
    singular: 'Retour d’expériences',
    plural: 'Retours d’expériences',
  },
  imageURL: '/block_illustrations/block_feedback.jpg',
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
    RichTextBase('description', 'Description', true),
    {
      name: 'videos',
      label: 'Vidéos',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          label: 'Titre de la vidéo',
          type: 'text',
          required: true,
        },
        {
          name: 'miniature',
          label: 'Miniature',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'video',
          label: 'Fichier vidéo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
