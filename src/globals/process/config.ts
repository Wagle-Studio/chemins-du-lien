import { GlobalConfig } from 'payload'
import { RichText } from '@/blocks/rich-text/config'

export const ProcessPage: GlobalConfig = {
  slug: 'process',
  label: 'Page processus',
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
      blocks: [RichText],
    },
  ],
}
