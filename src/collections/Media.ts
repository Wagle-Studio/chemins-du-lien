import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Média',
    plural: 'Médias',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: 'avatar',
    imageSizes: [
      {
        name: 'avatar',
        width: 40,
        height: 40,
      },
      {
        name: 'avatar_large',
        width: 100,
        height: 100,
      },
      {
        name: 'content',
        width: 500,
      },
    ],
  },
}
