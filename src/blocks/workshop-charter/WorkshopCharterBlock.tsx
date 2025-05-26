import { WorkshopCharter } from '@/ui/organisms/workshop-charter/WorkshopCharter'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'workshop_charter'>

export const WorkshopCharterBlock = (data: Props) => {
  return <WorkshopCharter data={data} />
}
