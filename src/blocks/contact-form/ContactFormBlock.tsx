import { BannerContactForm } from '@/ui/organisms/banner-contact-form/BannerContactForm'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'contact_form'>

export const ContactFormBlock = async (data: Props) => {
  return <BannerContactForm data={data} />
}
