import { Article } from '@/payload-types'
import { getCollectionWithParams } from '@/utilities/payload/collections'
import { ArticlesBlock } from '@/ui/blocks/articles-block/ArticlesBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'articles'>

export const Articles = async ({ type }: Props) => {
  let articles: Article[] = []

  switch (type) {
    case 'Les trois derniers articles':
      articles = await getCollectionWithParams('articles', {
        depth: 2,
        sort: 'createdAt',
        limit: 3,
      })
      break
  }

  return <ArticlesBlock data={articles} />
}
