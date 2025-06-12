import NotFoundPage from '@/ui/pages/NotFoundPage'
import { defaultSEO } from '@/utilities/SEO/fallback'

export default function NotFound() {
  return (
    <>
      <head>
        <title>{defaultSEO.title}</title>
        <meta name="description" content={defaultSEO.description} />
        <meta name="robots" content={defaultSEO.noIndex ? 'noindex' : 'index, follow'} />
        <meta property="og:title" content={defaultSEO.title} />
        <meta property="og:description" content={defaultSEO.description} />
        {/* {defaultSEO.image && <meta property="og:image" content={defaultSEO.image} />}  TODO : implemente SEO default image */}
      </head>
      <NotFoundPage />
    </>
  )
}
