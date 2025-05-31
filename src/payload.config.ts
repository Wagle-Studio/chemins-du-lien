import { fr } from '@payloadcms/translations/languages/fr'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { serveLivePreview } from './utilities/payload/preview'
import { Homepage } from './globals/homepage/config'
import { DiscoverPage } from './globals/discover/config'
import { AboutPage } from './globals/about/config'
import { ProcessPage } from './globals/process/config'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Workshops } from './collections/Workshops'
import { FAQ } from './collections/FAQ'
import { ContactMessages } from './collections/ContactMessages'

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
      globals: ['homepage', 'discover', 'about', 'process'],
    },
  },
  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { fr },
  },
  globals: [Homepage, DiscoverPage, AboutPage, ProcessPage],
  collections: [Users, Media, Categories, Workshops, FAQ, ContactMessages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})
