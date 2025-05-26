import { RichText } from '@/ui/organisms/rich-text/RichText'
import type { ExtractBlock, AllBlocks } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'content'>

export const RichTextBlock = (data: Props) => {
  return <RichText data={data} />
}
