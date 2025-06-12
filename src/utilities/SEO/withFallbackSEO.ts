import { About, Discover, Homepage, Process } from '@/payload-types'
import { defaultSEO } from './fallback'

export type StaticMeta = {
  metaTitle?: string
  metaDescription?: string
//   metaImage?: { url: string } TODO : implemente SEO default image
  noIndex?: boolean
}

type Options = StaticMeta | Homepage | Process | Discover | About

export function withFallbackSEO(data?: Options) {
  //   if (!data || !data.metaImage || typeof data.metaImage === 'number') return

  return {
    title: data?.metaTitle || defaultSEO.title,
    description: data?.metaDescription || defaultSEO.description,
    openGraph: {
      title: data?.metaTitle || defaultSEO.title,
      description: data?.metaDescription || defaultSEO.description,
      //   images: data?.metaImage?.url ? [data.metaImage.url] : [defaultSEO.image], TODO : implemente SEO default image
    },
    robots: data?.noIndex ? 'noindex' : 'index, follow',
  }
}
