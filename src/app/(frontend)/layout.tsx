import React from 'react'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import { LayoutProps } from '@/types/app'
import { PageLayout } from '@/ui/layout/page-layout/PageLayout'

const libreFranklin = Libre_Franklin({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

const fonts = [libreFranklin.className, openSans.className]

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({ children }: LayoutProps<'locale'>) {
  return <PageLayout fonts={fonts}>{children}</PageLayout>
}
