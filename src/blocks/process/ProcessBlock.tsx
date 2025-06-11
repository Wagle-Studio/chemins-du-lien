import { Process } from '@/ui/organisms/process/Process'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'process'>

export const ProcessBlock = (data: Props) => {
  return <Process data={data} />
}
