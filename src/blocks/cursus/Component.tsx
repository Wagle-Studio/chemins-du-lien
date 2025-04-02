import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'cursus'>

export const Cursus = async (data: Props) => {
  console.log(data)

  return <div></div>
}
