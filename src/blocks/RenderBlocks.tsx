import React from 'react'
import { blockComponents, blockValidators } from '@/types/blocks'

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

        const validator = blockValidators[block.blockType as keyof typeof blockValidators] as
          | ((block: T) => boolean)
          | undefined

        if (!Block) {
          console.warn(`Aucun composant pour le blockType: ${block.blockType}`)
          return null
        }

        if (validator && !validator(block)) {
          console.warn(
            `Block "${block.blockType}" invalide : données manquantes, bloc non affiché`,
            block,
          )
          return null
        }

        return <Block key={block.id} {...block} />
      })}
    </>
  )
}
