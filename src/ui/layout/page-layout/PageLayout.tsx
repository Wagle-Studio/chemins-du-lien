import './globals.scss'

import { Header } from '@/ui/layout/header/Header'
import { Footer } from '@/ui/layout/footer/Footer'

type Props = {
  fonts: string[]
  children: React.ReactNode
}

export const PageLayout = ({ fonts, children }: Props) => {
  return (
    <html lang="fr">
      <body>
        <div>
          <Header />
          <main className={fonts.join(' ')}>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
