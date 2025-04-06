import { Article } from '@/payload-types'
import { getLatestArticles } from '@/utilities/payload/shortcuts'
import { ArticlesBlock } from '@/ui/blocks/articles-block/ArticlesBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'articles'>

export const Articles = async ({ type }: Props) => {
  let articles: Article[] = []

  switch (type) {
    case 'Les trois derniers articles':
      articles = await getLatestArticles()
      break
  }

  return <ArticlesBlock data={articles} />
}
