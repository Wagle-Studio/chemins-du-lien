import { IntroductionTeamBlock } from '@/ui/blocks/introduction-team-block/IntroductionTeamBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_team'>

export const IntroductionTeam = async (data: Props) => {
  return <IntroductionTeamBlock data={data} />
}
