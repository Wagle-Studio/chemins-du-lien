import { Block } from 'payload'

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      label: false,
    },
  ],
}
