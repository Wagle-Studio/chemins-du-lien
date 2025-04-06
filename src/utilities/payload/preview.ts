import { CollectionConfig, GlobalConfig } from 'payload'

// Returns appropriate preview URL based on the document type
export const serveLivePreview = (
  data: Record<string, any>,
  collectionConfig: CollectionConfig | undefined,
  globalConfig: GlobalConfig | undefined,
): string => {
  if (collectionConfig && !globalConfig) {
    switch (collectionConfig.slug) {
      case 'articles':
        return `/api/preview?redirect=/${data.slug}`
      case 'cursus':
        return `/api/preview?redirect=/didacticiel/${data.slug}`
      case 'exercices':
        return `/api/preview?redirect=/didacticiel/exercice/${data.slug}`
      default:
        return '/'
    }
  }

  if (globalConfig && !collectionConfig) {
    switch (globalConfig.slug) {
      case 'homepage':
        return `/api/preview?redirect=/`
      default:
        return '/'
    }
  }

  return '/'
}
