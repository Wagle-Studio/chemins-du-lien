import { InstagramBlock } from '@/ui/blocks/instagram-block/InstagramBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'instagram'>

export const Instagram = async (data: Props) => {
  return <InstagramBlock data={data} />
}
