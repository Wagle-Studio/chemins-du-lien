import { Block } from 'payload'

export const Articles: Block = {
  slug: 'articles',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: ['Les trois derniers articles'],
      required: true,
    },
  ],
}
