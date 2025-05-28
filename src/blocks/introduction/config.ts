import { Block } from 'payload'

export const Introduction: Block = {
  slug: 'introduction',
  labels: {
    singular: 'Introduction page accueil',
    plural: 'Introductions page accueil',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_introduction.jpg',
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
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
