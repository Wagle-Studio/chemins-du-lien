import { WorkshopCharterBlock } from '@/ui/blocks/workshop-charter/WorkshopCharterBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'workshop_charter'>

export const WorkshopCharter = async (data: Props) => {
  return <WorkshopCharterBlock data={data} />
}
