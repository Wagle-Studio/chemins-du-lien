import { GlobalConfig } from 'payload'
import { Discoveries } from '@/blocks/discoveries/config'
import { Events } from '@/blocks/events/config'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Discoveries, Events],
    },
  ],
}
