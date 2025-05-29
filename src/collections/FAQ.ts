import type { CollectionConfig } from 'payload'

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
      name: 'question',
      label: 'Question',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'answer',
      label: 'Réponse',
      type: 'richText',
      required: true,
    },
  ],
}
