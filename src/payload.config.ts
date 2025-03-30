import { buildConfig, CollectionConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { Homepage } from './globals/homepage/config'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Exercices } from './collections/Exercices'
import { Cursus } from './collections/Cursus'
import { Categories } from './collections/Categories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig }) => serveLivePreview(data, collectionConfig),
      collections: ['pages', 'cursus', 'exercices'],
    },
  },
  globals: [Homepage],
  collections: [Users, Media, Pages, Exercices, Cursus, Categories],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})

const serveLivePreview = (data: Record<string, any>, config: CollectionConfig | undefined) => {
  console.log(config)

  switch (config?.slug) {
    case 'pages':
      return `/api/preview?redirect=/${data.slug}`
    case 'cursus':
      return `/api/preview?redirect=/didacticiel/${data.slug}`
    case 'exercices':
      return `/api/preview?redirect=/didacticiel/exercice/${data.slug}`
    default:
      return '/'
  }
}
