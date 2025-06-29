import { CollectionConfig, GlobalConfig } from 'payload'
import { createPreviewToken } from '@/utilities/crypto'

// Returns appropriate preview URL based on the document type
export const serveLivePreview = (
  data: Record<string, any>,
  collectionConfig: CollectionConfig | undefined,
  globalConfig: GlobalConfig | undefined,
): string => {
  let path: string | null = null

  if (collectionConfig && !globalConfig) {
    switch (collectionConfig.slug) {
      // case 'articles':
      //   path = `/articles/${data.slug}`
      //   break
      default:
        return '/'
    }
  }

  if (globalConfig && !collectionConfig) {
    switch (globalConfig.slug) {
      case 'homepage':
        path = '/'
        break
      case 'discover':
        path = '/decouvrir'
        break
      case 'contact':
        path = '/contact'
        break
      case 'process':
        path = '/processus'
        break
      default:
        return '/'
    }
  }

  if (!path) return '/'

  const token = createPreviewToken(path)
  const previewURL = `/api/preview?redirect=${encodeURIComponent(path)}&preview=true&token=${token}`

  return previewURL
}

// Checks if the current request is an authorized preview session
export const checkAuthorizedPreview = (
  searchParams: { [key: string]: string | string[] | undefined },
  path: string,
): boolean => {
  const isPreview = searchParams.preview === 'true'
  const expectedToken = createPreviewToken(path)
  const receivedToken = searchParams.token

  return isPreview && receivedToken === expectedToken
}
