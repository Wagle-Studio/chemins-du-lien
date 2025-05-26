import { IntroductionTeam } from '@/ui/organisms/introduction-team/IntroductionTeam'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'introduction_team'>

export const IntroductionTeamBlock = (data: Props) => {
  return <IntroductionTeam data={data} />
}
