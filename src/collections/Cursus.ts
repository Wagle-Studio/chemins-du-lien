import type { CollectionConfig } from 'payload'
import { useUniqueSlug } from '@/hooks/useUniqueSlug'
import { RichText } from '@/blocks/rich-text/config'

export const Cursus: CollectionConfig = {
  slug: 'cursus',
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
      name: 'exercices',
      type: 'relationship',
      relationTo: 'exercices',
      hasMany: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [RichText],
    },
  ],
  hooks: {
    beforeChange: [useUniqueSlug],
  },
}
