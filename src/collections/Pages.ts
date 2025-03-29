import type { CollectionConfig } from 'payload'
import { generateSlug } from '@/hooks/generateSlug'
import { Content } from '@/blocks/content/config'
import { Discoveries } from '@/blocks/discoveries/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Content, Discoveries],
    },
  ],
  hooks: {
    beforeChange: [generateSlug],
  },
}
