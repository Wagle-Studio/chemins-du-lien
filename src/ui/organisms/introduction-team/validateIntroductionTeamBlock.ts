import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateIntroductionTeamBlock(
  data: ExtractBlock<AllBlocks, 'introduction_team'>,
): boolean {
  const video = data['highlight-video']?.video
  const thumbnail = data['highlight-video']?.miniature

  const hasHighlightVideo =
    typeof video !== 'number' && !!video?.url && typeof thumbnail !== 'number' && !!thumbnail?.url

  const hasTitle = typeof data.title === 'string' && data.title.trim().length > 0
  const hasDescription = data.description != null

  const hasValidMembers =
    Array.isArray(data.members) &&
    data.members.every((member) => {
      const pic = member['profile-picture']
      return (
        typeof pic !== 'number' &&
        !!pic?.sizes?.avatar_large?.url &&
        typeof pic.sizes.avatar_large.width === 'number' &&
        typeof pic.sizes.avatar_large.height === 'number'
      )
    })

  return hasTitle && hasDescription && hasHighlightVideo && hasValidMembers
}
