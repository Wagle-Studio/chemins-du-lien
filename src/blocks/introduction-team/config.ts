import { Block } from 'payload'

export const IntroductionTeam: Block = {
  slug: 'introduction_team',
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
      name: 'highlight-video',
      type: 'group',
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
      name: 'members',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'profile-picture',
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
