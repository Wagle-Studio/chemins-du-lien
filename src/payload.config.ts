import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { serveLivePreview } from './utilities/payload-utils'
import { Homepage } from './globals/homepage/config'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Article } from './collections/Article'
import { Categories } from './collections/Categories'
import { Exercices } from './collections/Exercices'
import { Cursus } from './collections/Cursus'
import { Events } from './collections/Events'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: ({ data, collectionConfig, globalConfig }) =>
        serveLivePreview(data, collectionConfig, globalConfig),
      collections: ['articles', 'cursus', 'exercices'],
      globals: ['homepage'],
    },
  },
  globals: [Homepage],
  collections: [Users, Media, Article, Exercices, Cursus, Categories, Events],
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
