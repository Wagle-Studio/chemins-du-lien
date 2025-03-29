'use client'

import './style.scss'
import { Link } from '@/ui/link/Component.client'

export const Navigation: React.FC = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <Link href="/" className="header__brand__name">
          Insight Mediation
        </Link>
      </div>
      <nav>
        <ul className="header__nav">
          <Link href={`/didacticiel`} className="header__nav__item">
            Didacticiel
          </Link>
        </ul>
      </nav>
    </header>
  )
}
