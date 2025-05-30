import { ArticleRichTextPicture } from '@/ui/organisms/article-rich-text-picture/ArticleRichTextPicture'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'article_rich_text_picture'>

export const ArticleRichTextPictureBlock = (data: Props) => {
  return <ArticleRichTextPicture data={data} />
}
