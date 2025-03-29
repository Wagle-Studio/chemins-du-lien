'use client'

import './style.scss'
import { useAuth } from '@/auth/useAuth'
import { Link } from '@/ui/link/Component.client'
import { Button } from '@/ui/button/Component.client'

export const Navigation: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className="header">
      <div className="header__brand">
        <Link href="/" className="header__brand__name">
          Insight Mediation
        </Link>
      </div>
      <nav>
        <ul className="header__nav">
          <li>
            <Link href={`/didacticiel`} className="header__nav__item">
              Didacticiel
            </Link>
          </li>
          {!isAuthenticated && (
            <>
              <li>
                <Link href={`/inscription`} className="header__nav__item" variant="ghost">
                  Inscription
                </Link>
              </li>
              <li>
                <Link href={`/connexion`} className="header__nav__item" variant="primary">
                  Connexion
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Button className="header__nav__item" variant="ghost" onClick={logout}>
                  Déconnexion
                </Button>
              </li>
              <li>
                <Link href={`/profil`} className="header__nav__item" variant="primary">
                  Profil
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}
