import { filterPublishedOnly, getCollectionWithParams } from '@/utilities/payload/collections'
import { Faq } from '@/ui/organisms/faq/Faq'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'faq'>

export const FaqBlock = async (data: Props) => {
  const rawFaqs = await getCollectionWithParams('faq', {
    depth: 2,
    draft: false,
    overrideAccess: false,
  })

  const faqs = filterPublishedOnly(rawFaqs)

  return <Faq data={data} faqs={faqs} />
}
