import type { Homepage, Page } from '@/payload-types'
import { Discoveries } from '@/blocks/discoveries/Component'
import { Content } from '@/blocks/content/Component'

export type HomepageBlocks = NonNullable<Homepage['blocks']>[number]
export type PageBlocks = NonNullable<Page['blocks']>[number]
export type Cursus = NonNullable<Page['blocks']>[number]
export type AllBlocks = HomepageBlocks | PageBlocks | Cursus

export const blockComponents: {
  [K in AllBlocks['blockType']]: React.ComponentType<Extract<AllBlocks, { blockType: K }>>
} = {
  discoveries: Discoveries,
  content: Content,
}

export type ExtractBlock<T extends { blockType: string }, S extends T['blockType']> = Extract<
  T,
  { blockType: S }
>
