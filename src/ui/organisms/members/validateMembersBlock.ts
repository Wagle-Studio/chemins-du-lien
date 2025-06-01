import { ExtractBlock, AllBlocks } from '@/types/blocks'

export function validateMembersBlock(data: ExtractBlock<AllBlocks, 'members'>): boolean {
  const hasValidMembers =
    Array.isArray(data.members) &&
    data.members.length > 0 &&
    data.members.every((member) => {
      const pic = member['profile-picture']

      const hasValidPic =
        typeof pic !== 'number' &&
        ((!!pic?.sizes?.avatar_large?.url &&
          typeof pic.sizes.avatar_large.width === 'number' &&
          typeof pic.sizes.avatar_large.height === 'number') ||
          !!pic?.url)

      return typeof member.title === 'string' && member.description != null && hasValidPic
    })

  return hasValidMembers
}
