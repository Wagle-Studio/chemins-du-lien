import { Cursus as CursusComponent } from '@/ui/blocks/cursus/Cursus'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'cursus'>

export const Cursus: React.FC<Props> = (data) => {
  return <CursusComponent data={data} />
}
