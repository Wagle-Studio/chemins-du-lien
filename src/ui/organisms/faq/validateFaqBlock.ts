import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateFaqBlock(data: ExtractBlock<AllBlocks, 'faq'>): boolean {
  return typeof data.title === 'string' && data.title.trim().length > 0
}
