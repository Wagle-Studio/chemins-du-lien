import { Block } from 'payload'

export const IntroductionEvents: Block = {
  slug: 'introduction_events',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'background',
      type: 'checkbox',
    },
  ],
}
