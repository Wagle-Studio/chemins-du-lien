import { Article } from '@/payload-types'
import { getLatestArticles } from '@/utilities/payload-utils'
import { Articles as ArticlesComponent } from '@/ui/blocks/articles/Articles'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'articles'>

export const Articles = async ({ type }: Props) => {
  let articles: Article[] = []

  switch (type) {
    case 'Les trois derniers articles':
      articles = await getLatestArticles()
      break
  }

  return <ArticlesComponent data={articles} />
}
