import { Block } from 'payload'

export const Feedback: Block = {
  slug: 'feedback',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'videos',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'miniature',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'background',
      type: 'checkbox',
    },
  ],
}
