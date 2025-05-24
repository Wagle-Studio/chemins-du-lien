import type { Homepage, Article, Cursus as CursusType, Process } from '@/payload-types'
import { Introduction } from '@/blocks/introduction/Component'
import { IntroductionEvents } from '@/blocks/introduction-events/Component'
import { Discoveries } from '@/blocks/discoveries/Component'
import { Content } from '@/blocks/content/Component'
import { Events } from '@/blocks/events/Component'
import { Cursus } from '@/blocks/cursus/Component'
import { Articles } from '@/blocks/articles/Component'
import { IntroductionTeam } from '@/blocks/introduction-team/Component'
import { Instagram } from '@/blocks/instagram/Component'
import { PageHeroBanner } from '@/blocks/page-hero-banner/Component'
import { WorkshopCharter } from '@/blocks/workshop-charter/Component'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type ProcessBlocks = NonNullable<Process['blocks']>[number]
export type ArticleBlocks = NonNullable<Article['blocks']>[number]
export type CursusBlocks = NonNullable<CursusType['blocks']>[number]
export type AllBlocks = HomepageBlocks | ProcessBlocks | ArticleBlocks | CursusBlocks

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  discoveries: Discoveries,
  introduction: Introduction,
  introduction_events: IntroductionEvents,
  introduction_team: IntroductionTeam,
  instagram: Instagram,
  page_hero_banner: PageHeroBanner,
  workshop_charter: WorkshopCharter,
  content: Content,
  events: Events,
  cursus: Cursus,
  articles: Articles,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
