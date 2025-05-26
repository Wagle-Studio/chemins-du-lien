import { ContentBlock } from '@/ui/blocks/content-block/ContentBlock'
import type { ExtractBlock, AllBlocks } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'content'>

export const Content: React.FC<Props> = (data) => {
  return <ContentBlock data={data} />
}
