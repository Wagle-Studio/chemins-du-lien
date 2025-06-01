import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateWorkshopCharterBlock(
  data: ExtractBlock<AllBlocks, 'workshop_charter'>,
): boolean {
  const hasTitle = typeof data.title === 'string' && data.title.trim().length > 0
  const hasSubtitle = typeof data.subtitle === 'string' && data.subtitle.trim().length > 0

  const hasValidItems =
    Array.isArray(data.item) &&
    data.item.length > 0 &&
    data.item.every((item) => {
      return typeof item.title === 'string' && item.description != null
    })

  const hasValidImage =
    typeof data.image !== 'number' &&
    !!data.image?.sizes?.content?.url &&
    typeof data.image.sizes.content.width === 'number' &&
    typeof data.image.sizes.content.height === 'number'

  return hasTitle && hasSubtitle && hasValidItems && hasValidImage
}
