import { CursusBlock } from '@/ui/blocks/cursus-block/CursusBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'cursus'>

export const Cursus: React.FC<Props> = (data) => {
  return <CursusBlock data={data} />
}
