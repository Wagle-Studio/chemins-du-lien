import React from 'react'
import { StaticMeta, withFallbackSEO } from '@/utilities/SEO/withFallbackSEO'
import { ContactPage } from '@/ui/pages/ContactPage'

export default async function Contact() {
  return (
    <>
      <ContactPage />
    </>
  )
}

const meta: StaticMeta = {
  metaTitle: 'Contact – Rejoindre ou poser vos questions',
  metaDescription:
    'Envie d’en savoir plus ou de vous inscrire à un atelier ? Écrivez-nous via ce formulaire, on vous répondra rapidement.',
  noIndex: false,
}

export async function generateMetadata() {
  return withFallbackSEO(meta)
}
