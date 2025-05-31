import { getCollectionWithParams } from '@/utilities/payload/collections'
import { ArticleNextWorkshop } from '@/ui/organisms/article-next-workshops/ArticleNextWorkshop'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'article_next_workshops'>

export const ArticleNextWorkshopsBlock = async (data: Props) => {
  const workshops = await getCollectionWithParams('workshops', {
    depth: 2,
    sort: 'date',
    limit: 3,
  })

  return <ArticleNextWorkshop data={data} workshops={workshops} />
}
