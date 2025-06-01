import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateIntroductionWorkshopBlock(
  data: ExtractBlock<AllBlocks, 'introduction_workshop'>,
): boolean {
  const image = data.image

  const hasImage =
    typeof image !== 'number' &&
    !!image?.sizes?.content?.url &&
    typeof image.sizes.content.width === 'number' &&
    typeof image.sizes.content.height === 'number'

  return typeof data.title === 'string' && data.description != null && hasImage
}
