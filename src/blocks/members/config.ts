import { RichTextBase } from '@/fields/RichTextBase'
import { Block } from 'payload'

export const Members: Block = {
  slug: 'members',
  labels: {
    singular: 'Membre de l’équipe',
    plural: 'Membres de l’équipe',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_members.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'members',
      label: 'Membres',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'profile-picture',
          label: 'Photo de profil',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          label: 'Nom et rôle',
          type: 'text',
          required: true,
        },
        RichTextBase('description', 'Description', true),
      ],
    },
  ],
}
