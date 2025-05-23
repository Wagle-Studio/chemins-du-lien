import { GlobalConfig } from 'payload'
import { Introduction } from '@/blocks/introduction/config'
import { IntroductionEvents } from '@/blocks/introduction_events/config'
import { Discoveries } from '@/blocks/discoveries/config'
import { Events } from '@/blocks/events/config'
import { Cursus } from '@/blocks/cursus/config'
import { Articles } from '@/blocks/articles/config'
import { IntroductionTeam } from '@/blocks/introduction_team/config'
import { Instagram } from '@/blocks/instagram/config'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        Introduction,
        IntroductionEvents,
        IntroductionTeam,
        Instagram,
        Discoveries,
        Events,
        Cursus,
        Articles,
      ],
    },
  ],
}
