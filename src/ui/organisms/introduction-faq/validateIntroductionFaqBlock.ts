import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateIntroductionFaqBlock(
  data: ExtractBlock<AllBlocks, 'introduction_faq'>,
): boolean {
  const image = data.image

  const hasImage =
    typeof image !== 'number' &&
    !!image?.sizes?.content?.url &&
    typeof image.sizes.content.width === 'number' &&
    typeof image.sizes.content.height === 'number'

  return (
    typeof data.title === 'string' &&
    typeof data.subtitle === 'string' &&
    data.description != null &&
    hasImage
  )
}
