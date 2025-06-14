import { Block } from 'payload'

export const Instagram: Block = {
  slug: 'instagram',
  labels: {
    singular: 'Instagram',
    plural: 'Instagram',
  },
  imageURL: '/block_illustrations/block_instagram.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'profile-url',
      label: 'URL de la page Instagram',
      type: 'text',
      required: true,
    },
  ],
}
