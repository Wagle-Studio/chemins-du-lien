import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { serveLivePreview } from './utilities/payload/preview'
import { Homepage } from './globals/homepage/config'
import { DiscoverPage } from './globals/discover/config'
import { AboutPage } from './globals/about/config'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Workshops } from './collections/Workshops'

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
      collections: [],
      globals: ['homepage', 'discover'],
    },
  },
  globals: [Homepage, DiscoverPage, AboutPage],
  collections: [Users, Media, Categories, Workshops],
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
