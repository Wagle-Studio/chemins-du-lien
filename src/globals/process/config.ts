import { GlobalConfig } from 'payload'
import { PageHeroBanner } from '@/blocks/page-hero-banner/config'

export const ProcessPage: GlobalConfig = {
  slug: 'process',
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [PageHeroBanner],
    },
  ],
}
