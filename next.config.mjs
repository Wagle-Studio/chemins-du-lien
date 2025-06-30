import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: [
    'chemins-du-lien.preprod.wolff-kevin.fr',
    'www.chemins-du-lien.preprod.wolff-kevin.fr',
    'https://chemins-du-lien.preprod.wolff-kevin.fr',
    'https://www.chemins-du-lien.preprod.wolff-kevin.fr',
    'chemins-du-lien.fr',
    'www.chemins-du-lien.fr',
    'https://chemins-du-lien.fr',
    'https://www.chemins-du-lien.fr',
  ],
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
