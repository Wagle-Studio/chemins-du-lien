import type { CollectionConfig } from 'payload'
import { useUniqueSlug } from '@/hooks/useUniqueSlug'
import { RichText } from '@/blocks/rich-text/config'
import { Discoveries } from '@/blocks/discoveries/config'

export const Article: CollectionConfig = {
  slug: 'articles',
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
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [RichText, Discoveries],
    },
  ],
  hooks: {
    beforeChange: [useUniqueSlug],
  },
}
