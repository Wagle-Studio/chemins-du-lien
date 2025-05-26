'use client'

import './header.scss'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { Link } from '@/ui/atoms/link/Link'
import { MenuIcon } from '@/ui/atoms/icons/MenuIcon'

export const Header: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuScrolled, setIsMenuScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headerRef.current) return

    const el = headerRef.current

    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 100
      setIsMenuScrolled(shouldBeScrolled)
      el.classList.toggle('is-scrolled', shouldBeScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no_scroll', isMobileMenuOpen)
  }, [isMobileMenuOpen])

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)

    if (isMenuScrolled) {
      setTimeout(() => {
        const shouldBeScrolled = window.scrollY > 100
        headerRef.current?.classList.toggle('is-scrolled', shouldBeScrolled)
      }, 0)
    }
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
          <Link
            href="/"
            className="header__bar__brand__name"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Chemins du lien
            <br />
            <span className="header__bar__brand__name__sub">de soi à l&apos;autre</span>
          </Link>
        </div>
        <div
          className={clsx('header__bar__mobile_menu', {
            header__bar__mobile_menu__mobile: isMobileMenuOpen,
          })}
          onClick={handleMobileMenu}
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
              <Link href={`/`} onClick={() => setIsMobileMenuOpen(false)}>
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
              <Link href={`/decouvrir`} onClick={() => setIsMobileMenuOpen(false)}>
                Découvrir
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
              <Link href={`/a-propos`} onClick={() => setIsMobileMenuOpen(false)}>
                À propos
              </Link>
            </li>
            <li
              className={clsx('header__bar__nav__list__item', {
                header__bar__nav__list__item__mobile: isMobileMenuOpen,
              })}
            >
              <Link href={`/ateliers`} onClick={() => setIsMobileMenuOpen(false)}>
                Ateliers
              </Link>
            </li>
            <li
              className={clsx('header__bar__nav__list__item', {
                header__bar__nav__list__item__mobile: isMobileMenuOpen,
              })}
            >
              <Link href={`/contact`} variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
