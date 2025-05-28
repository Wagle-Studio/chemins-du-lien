import type { CollectionConfig } from 'payload'
import { useUniqueSlug } from '@/hooks/useUniqueSlug'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  labels: {
    singular: 'Foire aux questions',
    plural: 'Foire aux questions',
  },
  admin: {
    useAsTitle: 'question',
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
      name: 'question',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [useUniqueSlug],
  },
}
