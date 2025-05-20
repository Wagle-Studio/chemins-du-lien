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
      name: 'background',
      type: 'checkbox',
    },
  ],
}
