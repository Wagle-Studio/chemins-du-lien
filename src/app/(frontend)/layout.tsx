import React from 'react'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import { LayoutProps } from '@/types/app'
import { PageLayout } from '@/ui/layout/page-layout/PageLayout'

export const metadata = {
  description: 'Chemins du lien',
  title: 'Chemins du lien',
}

const libreFranklin = Libre_Franklin({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

const fonts = [libreFranklin.className, openSans.className]

export default function RootLayout({ children }: LayoutProps<'locale'>) {
  return <PageLayout fonts={fonts}>{children}</PageLayout>
}
