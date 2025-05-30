import React from 'react'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import { PageLayout } from '@/ui/layout/page-layout/PageLayout'

export const metadata = {
  description: 'Chemins du lien',
  title: 'Chemins du lien',
}

// TODO : fix fonts loadind on VPS.

const libreFranklin = Libre_Franklin({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

const fonts = [libreFranklin.className, openSans.className]

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <PageLayout fonts={fonts}>{children}</PageLayout>
}
