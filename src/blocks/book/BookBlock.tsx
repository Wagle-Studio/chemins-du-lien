import { Book } from '@/ui/organisms/book/Book'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'book'>

export const BookBlock = (data: Props) => {
  return <Book data={data} />
}
