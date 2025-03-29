import { Discoveries as DiscoveriesComponent } from '@/ui/blocks/discoveries/Discoveries'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'discoveries'>

export const Discoveries: React.FC<Props> = ({ cards }) => {
  return <DiscoveriesComponent data={cards} />
}
