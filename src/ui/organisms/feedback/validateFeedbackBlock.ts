import { AllBlocks, ExtractBlock } from '@/types/blocks'

export function validateFeedbackBlock(data: ExtractBlock<AllBlocks, 'feedback'>): boolean {
  const hasTitle = typeof data.title === 'string' && data.title.trim().length > 0
  const hasDescription = data.description != null

  const hasValidVideos =
    Array.isArray(data.videos) &&
    data.videos.length > 0 &&
    data.videos.every((video) => {
      const miniature = video.miniature
      const hasMiniature =
        typeof miniature !== 'number' &&
        !!miniature?.url &&
        typeof miniature.sizes?.content?.width === 'number' &&
        typeof miniature.sizes?.content?.height === 'number'

      const videoFile = video.video
      const hasVideo = typeof videoFile !== 'number' && !!videoFile?.url

      const hasVideoTitle = typeof video.title === 'string' && video.title.trim().length > 0

      return hasMiniature && hasVideo && hasVideoTitle
    })

  return hasTitle && hasDescription && hasValidVideos
}
