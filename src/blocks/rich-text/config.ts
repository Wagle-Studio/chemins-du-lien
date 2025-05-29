import { Block } from 'payload'

export const RichText: Block = {
  slug: 'content',
  labels: {
    singular: 'Contenu libre',
    plural: 'Contenus libres',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_content.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'richText',
      label: 'Contenu',
      type: 'richText',
    },
  ],
}
