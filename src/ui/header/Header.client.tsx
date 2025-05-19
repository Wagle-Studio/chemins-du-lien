'use client'

import './style.scss'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Link } from '@/ui/link/Link'
import { MenuIcon } from '@/ui/icons/MenuIcon'

gsap.registerPlugin(ScrollTrigger)

export const Header: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headerRef.current) return

    ScrollTrigger.create({
      start: 'top -100',
      onUpdate: (self) => {
        headerRef.current?.classList.toggle('is-scrolled', self.scroll() > 100)
      },
    })
  }, [])

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
    <header
      ref={headerRef}
      className={clsx('header', { header__mobile: isMobileMenuOpen }, className)}
      {...props}
    >
      <div className={clsx('header__bar', { header__bar__mobile: isMobileMenuOpen })}>
        <div
          className={clsx('header__bar__brand', { header__bar__brand__mobile: isMobileMenuOpen })}
        >
          <Link href="/" className="header__bar__brand__name" onClick={closeMobileMenu}>
            Chemins du lien
            <br />
            <span className="header__bar__brand__name__sub">de soi à l'autre</span>
          </Link>
        </div>
        <div
          className={clsx('header__bar__mobile_menu', {
            header__bar__mobile_menu__mobile: isMobileMenuOpen,
          })}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="header__bar__mobile_menu__icon" />
        </div>
        <nav className={clsx('header__bar__nav', { header__bar__nav__mobile: isMobileMenuOpen })}>
          <ul
            className={clsx('header__bar__nav__list', {
              header__bar__nav__list__mobile: isMobileMenuOpen,
            })}
          >
            <li
              className={clsx('header__bar__nav__list__item', {
                header__bar__nav__list__item__mobile: isMobileMenuOpen,
              })}
            >
              <Link href={`/`} onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li
              className={clsx(
                'header__bar__nav__list__item',
                'header__bar__nav__list__item--hidden',
                {
                  header__bar__nav__list__item__mobile: isMobileMenuOpen,
                  'header__bar__nav__list__item__mobile--hidden': isMobileMenuOpen,
                },
              )}
            >
              <Link href={`/processus`} onClick={closeMobileMenu}>
                Processus
              </Link>
            </li>
            <li
              className={clsx('header__bar__nav__list__item', {
                header__bar__nav__list__item__mobile: isMobileMenuOpen,
              })}
            >
              <Link href={`/ateliers`} onClick={closeMobileMenu}>
                Ateliers
              </Link>
            </li>
            <Link href={`/contact`} variant="primary" onClick={closeMobileMenu}>
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
