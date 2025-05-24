import { GlobalConfig } from 'payload'
import { PageHeroBanner } from '@/blocks/page-hero-banner/config'
import { WorkshopCharter } from '@/blocks/workshop-charter/config'
import { Feedback } from '@/blocks/feedback/config'

export const ProcessPage: GlobalConfig = {
  slug: 'process',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [PageHeroBanner, WorkshopCharter, Feedback],
    },
  ],
}
