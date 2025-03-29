import { RichText } from '@/ui/blocks/rich-text/RichText'
import type { ExtractBlock, AllBlocks } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'content'>

export const Content: React.FC<Props> = ({ richText }) => {
  if (!richText) return null

  return <RichText data={richText} />
}
