import { internalLink } from '@/fields/internalLink'
import { Block } from 'payload'

export const Discoveries: Block = {
  slug: 'discoveries',
  fields: [
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        internalLink,
      ],
    },
  ],
}
