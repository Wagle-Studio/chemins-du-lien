'use client'

import './style.scss'
import { HTMLAttributes, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useAuth } from '@/hooks/useAuth'
import { Link } from '@/ui/link/Link'
import { Button } from '@/ui/button/Button.client'
import { MenuIcon } from '@/ui/icons/MenuIcon'

export const Header: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no_scroll')
    } else {
      document.body.classList.remove('no_scroll')
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={clsx('header', className)} {...props}>
      <div className="header__brand">
        <Link href="/" className="header__brand__name" onClick={closeMobileMenu}>
          Insight Mediation
        </Link>
      </div>
      <div className="header__mobile_menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <MenuIcon className="header__mobile_menu__icon" />
      </div>
      <nav className={clsx('header__nav', { header__nav__mobile: isMobileMenuOpen })}>
        <ul className={clsx('header__nav__list', { header__nav__list__mobile: isMobileMenuOpen })}>
          {/* <li
            className={clsx('header__nav__list__item', {
              header__nav__list__item__mobile: isMobileMenuOpen,
            })}
          >
            <Link href={`/evenements`} onClick={closeMobileMenu}>
              Événements
            </Link>
          </li> */}
          <li
            className={clsx('header__nav__list__item', {
              header__nav__list__item__mobile: isMobileMenuOpen,
            })}
          >
            <Link href={`/articles`} onClick={closeMobileMenu}>
              Articles
            </Link>
          </li>
          <li
            className={clsx('header__nav__list__item', {
              header__nav__list__item__mobile: isMobileMenuOpen,
            })}
          >
            <Link href={`/didacticiel`} onClick={closeMobileMenu}>
              Didacticiel
            </Link>
          </li>
          {!isAuthenticated && (
            <>
              <li>
                <Link href={`/inscription`} variant="ghost" onClick={closeMobileMenu}>
                  Inscription
                </Link>
              </li>
              <li>
                <Link href={`/connexion`} variant="primary" onClick={closeMobileMenu}>
                  Connexion
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Button
                  variant="ghost"
                  onClick={() => {
                    logout()
                    closeMobileMenu()
                  }}
                >
                  Déconnexion
                </Button>
              </li>
              <li>
                <Link href={`/profil`} variant="primary" onClick={closeMobileMenu}>
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
