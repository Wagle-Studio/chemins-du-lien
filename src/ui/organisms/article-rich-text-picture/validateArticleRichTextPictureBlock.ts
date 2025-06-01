import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateArticleRichTextPictureBlock(
  data: ExtractBlock<AllBlocks, 'article_rich_text_picture'>,
): boolean {
  return (
    typeof data['image-position'] === 'string' &&
    data.content != null &&
    typeof data.image !== 'number' &&
    !!data.image?.sizes?.content?.url &&
    typeof data.image.sizes.content.width === 'number' &&
    typeof data.image.sizes.content.height === 'number'
  )
}
