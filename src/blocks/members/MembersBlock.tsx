import { Members } from '@/ui/organisms/members/Members'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'members'>

export const MembersBlock = (data: Props) => {
  return <Members data={data} />
}
