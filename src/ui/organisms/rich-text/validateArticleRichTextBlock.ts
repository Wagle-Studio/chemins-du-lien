import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateArticleRichTextBlock(
  data: ExtractBlock<AllBlocks, 'article_rich_text'>,
): boolean {
  return data.richText != null
}
