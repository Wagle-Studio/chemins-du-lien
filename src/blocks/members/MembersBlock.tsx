import type { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Members } from '@/ui/organisms/members/Members'

type Props = ExtractBlock<AllBlocks, 'members'>

export const MembersBlock = (data: Props) => {
  return <Members data={data} />
}
