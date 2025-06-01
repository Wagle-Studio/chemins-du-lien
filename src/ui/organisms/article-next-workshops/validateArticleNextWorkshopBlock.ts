import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateArticleNextWorkshopBlock(
  data: ExtractBlock<AllBlocks, 'article_next_workshops'>,
): boolean {
  return typeof data.background === 'boolean' || typeof data.background === 'undefined'
}
