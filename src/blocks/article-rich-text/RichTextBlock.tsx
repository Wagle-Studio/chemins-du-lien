import { RichText } from '@/ui/organisms/rich-text/RichText'
import type { ExtractBlock, AllBlocks } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'article_rich_text'>

export const ArticleRichTextBlock = (data: Props) => {
  return <RichText data={data} full />
}
