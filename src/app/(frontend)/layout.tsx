import './globals.scss'
import React from 'react'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import { AuthWrapper } from '@/auth/AuthWrapper.server'
import { Header } from '@/ui/layout/header/Header'
import { Footer } from '@/ui/layout/footer/Footer'

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
          <div>
            <Header />
            <main className={fonts.join(' ')}>{children}</main>
          </div>
          <Footer />
        </AuthWrapper>
      </body>
    </html>
  )
}
