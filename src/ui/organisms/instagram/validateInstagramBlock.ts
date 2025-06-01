import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateInstagramBlock(data: ExtractBlock<AllBlocks, 'instagram'>): boolean {
  return typeof data['profile-url'] === 'string' && data['profile-url'].trim().length > 0
}
