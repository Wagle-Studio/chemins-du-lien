import { internalLink } from '@/fields/internalLink'
import { Block } from 'payload'

export const Cursus: Block = {
  slug: 'cursus',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}
