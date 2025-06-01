import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateBookBlock(data: ExtractBlock<AllBlocks, 'book'>): boolean {
  const productImage = data.product?.['product-picture']
  const authorImage = data.author?.picture

  const hasProductImage =
    typeof productImage !== 'number' &&
    !!productImage?.sizes?.content?.url &&
    typeof productImage.sizes.content.width === 'number' &&
    typeof productImage.sizes.content.height === 'number'

  const hasAuthorImage =
    typeof authorImage !== 'number' &&
    !!authorImage?.sizes?.avatar?.url &&
    typeof authorImage.sizes.avatar.width === 'number' &&
    typeof authorImage.sizes.avatar.height === 'number'

  return (
    typeof data.title === 'string' &&
    typeof data.product?.['shop-url'] === 'string' &&
    typeof data.author?.author === 'string' &&
    typeof data.author?.description === 'string' &&
    data.product?.comment != null &&
    hasProductImage &&
    hasAuthorImage
  )
}
