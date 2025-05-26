import { GlobalConfig } from 'payload'
import { RichText } from '@/blocks/rich-text/config'
import { Members } from '@/blocks/members/config'
import { Book } from '@/blocks/book/config'

export const AboutPage: GlobalConfig = {
  slug: 'about',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'introduction',
      type: 'richText',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [RichText, Members, Book],
    },
  ],
}
