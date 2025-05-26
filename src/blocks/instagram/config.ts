import { Block } from 'payload'

export const Instagram: Block = {
  slug: 'instagram',
  fields: [
    {
      name: 'background',
      type: 'checkbox',
    },
    {
      name: 'profile-url',
      type: 'text',
      required: true,
    },
  ],
}
