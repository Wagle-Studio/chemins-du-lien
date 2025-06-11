import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateProcessBlock(data: ExtractBlock<AllBlocks, 'process'>): boolean {
  const hasTitle = typeof data.title === 'string' && data.title.trim().length > 0
  const hasSubtitle = typeof data.subtitle === 'string' && data.subtitle.trim().length > 0

  const hasStapes =
    Array.isArray(data.stapes) &&
    data.stapes.length > 0 &&
    data.stapes.every((stape) => {
      return (
        typeof stape.id === 'string' &&
        typeof stape.title === 'string' &&
        stape.title.trim().length > 0 &&
        stape.description != null
      )
    })

  return hasTitle && hasSubtitle && hasStapes
}
