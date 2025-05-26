import { GlobalConfig } from 'payload'
import { Introduction } from '@/blocks/introduction/config'
import { IntroductionEvents } from '@/blocks/introduction-events/config'
import { IntroductionTeam } from '@/blocks/introduction-team/config'
import { Instagram } from '@/blocks/instagram/config'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'banner',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [Introduction, IntroductionEvents, IntroductionTeam, Instagram],
    },
  ],
}
