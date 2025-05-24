import { PageHeroBannerBlock } from '@/ui/blocks/page-hero-banner/PageHeroBannerBlock'
import type { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = ExtractBlock<AllBlocks, 'page_hero_banner'>

export const PageHeroBanner = async (data: Props) => {
  return <PageHeroBannerBlock data={data} />
}
