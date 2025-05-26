import { Block } from 'payload'

export const RichText: Block = {
  slug: 'content',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      label: false,
    },
    {
      name: 'background',
      type: 'checkbox',
    },
  ],
}
