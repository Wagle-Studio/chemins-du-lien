import './globals.scss'
import React from 'react'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import { AuthWrapper } from '@/auth/AuthWrapper.server'
import { Navigation } from '@/ui/header/Component.client'

export const metadata = {
  description: 'Hello world',
  title: 'Hello world',
}

const libreFranklin = Libre_Franklin({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

const fonts = [libreFranklin.className, openSans.className]

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head></head>
      <body>
        <AuthWrapper>
          <Navigation />
          <main className={fonts.join(' ')}>{children}</main>
        </AuthWrapper>
      </body>
    </html>
  )
}
