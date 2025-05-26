import { Instagram } from '@/ui/organisms/instagram/Instagram'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'instagram'>

export const InstagramBlock = (data: Props) => {
  return <Instagram data={data} />
}
