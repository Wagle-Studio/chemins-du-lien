import { Block } from 'payload'

export const Faq: Block = {
  slug: 'faq',
  labels: {
    singular: 'Bloc FAQ',
    plural: 'Blocs FAQ',
  },
  imageURL: '/block_illustrations/block_faq.jpg',
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
  ],
}
