import { GlobalConfig } from 'payload'
import { Discoveries } from '@/blocks/discoveries/config'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Discoveries],
    },
  ],
}
