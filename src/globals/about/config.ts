import { GlobalConfig } from 'payload'
import { RichText } from '@/blocks/rich-text/config'
import { Members } from '@/blocks/members/config'
import { Book } from '@/blocks/book/config'
import { Faq } from '@/blocks/faq/config'
import { Instagram } from '@/blocks/instagram/config'

export const AboutPage: GlobalConfig = {
  slug: 'about',
  label: 'Page À propos',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      label: 'Titre principal',
      type: 'text',
      required: true,
    },
    {
      name: 'introduction',
      label: 'Introduction',
      type: 'richText',
      required: true,
    },
    {
      name: 'blocks',
      label: 'Blocs de la page',
      type: 'blocks',
      blocks: [RichText, Members, Book, Faq, Instagram],
    },
  ],
}
