import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://chemins-du-lien.preprod.wolff-kevin.fr',
    'https://www.chemins-du-lien.preprod.wolff-kevin.fr',
  ],
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
