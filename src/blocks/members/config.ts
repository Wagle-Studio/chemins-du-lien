import { Block } from 'payload'

export const Members: Block = {
  slug: 'members',
  fields: [
    {
      name: 'members',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'profile-picture',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
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
      ],
    },
    {
      name: 'background',
      type: 'checkbox',
    },
  ],
}
