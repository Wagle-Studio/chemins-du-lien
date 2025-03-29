import type { ExtractBlock, AllBlocks } from '@/blocks'
import { RichText } from '@/ui/rich-text/Component.client'

type Props = ExtractBlock<AllBlocks, 'content'>

export const Content: React.FC<Props> = ({ richText }) => {
  if (!richText) return null

  return <RichText data={richText} />
}
