import type { Homepage, Article, Cursus } from '@/payload-types'
import { Discoveries } from '@/blocks/discoveries/Component'
import { Content } from '@/blocks/content/Component'
import { Events } from '@/blocks/events/Component'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type ArticleBlocks = NonNullable<Article['blocks']>[number]
export type CursusBlocks = NonNullable<Cursus['blocks']>[number]
export type AllBlocks = HomepageBlocks | ArticleBlocks | CursusBlocks

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  discoveries: Discoveries,
  content: Content,
  events: Events,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
