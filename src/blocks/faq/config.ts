import { Block } from 'payload'

export const Faq: Block = {
  slug: 'faq',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'background',
      type: 'checkbox',
    },
  ],
}
