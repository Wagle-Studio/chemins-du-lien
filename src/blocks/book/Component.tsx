import { BookBlock } from '@/ui/blocks/book-block/BookBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'book'>

export const Book = async (data: Props) => {
  return <BookBlock data={data} />
}
