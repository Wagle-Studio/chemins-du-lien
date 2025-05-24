import { Block } from 'payload'

export const PageHeroBanner: Block = {
  slug: 'page_hero_banner',
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
  ],
}
