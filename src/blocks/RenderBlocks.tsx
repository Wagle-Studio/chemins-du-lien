import React from 'react'
import { blockComponents } from '@/blocks'

type BaseBlock = { blockType: string; id?: string | null }

type RenderBlocksProps<T extends BaseBlock> = {
  blocks: T[] | null | undefined
}

export function RenderBlocks<T extends BaseBlock>({ blocks }: RenderBlocksProps<T>) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block) => {
        const Block = blockComponents[block.blockType as keyof typeof blockComponents] as
          | React.ComponentType<T>
          | undefined

        if (!Block) {
          console.warn(`No component found for blockType: ${block.blockType}`)
          return null
        }

        return <Block key={block.id} {...block} />
      })}
    </>
  )
}
