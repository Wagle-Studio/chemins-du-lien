import './footer.scss'

import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Link } from '@/ui/atoms/link/Link'
import { ExternalLinkIcon } from '@/ui/atoms/icons/ExternalLinkIcon'
import { InstagramIcon } from '@/ui/atoms/icons/InstagramIcon'
import { FacebookIcon } from '@/ui/atoms/icons/FacebookIcon'

export const Footer: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx('footer', className)} {...props}>
      <div className="footer__wrapper">
        <div className="footer__wrapper__brand">
          <Link href="/" className="footer__wrapper__brand__name">
            Chemins du lien
            <br />
            <span className="footer__wrapper__brand__name__sub">de soi à l&apos;autre</span>
          </Link>
          <div className="footer__wrapper__brand__mentions">
            <p>© 2025 Chemins du lien – Tous droits réservés.</p>
            <Link
              href={`https://www.linkedin.com/in/wolff-kevin/`}
              target="_blank"
              className="footer__wrapper__brand__mentions--wgls_studio"
            >
              Site réalisé par Wolff Kévin <ExternalLinkIcon />
            </Link>
          </div>
        </div>
        <div className="footer__wrapper__links">
          <div className="footer__wrapper__links__social_medias">
            <div className="footer__wrapper__links__social_medias__item">
              <InstagramIcon className="footer__wrapper__links__social_medias__item__icon" />
              <Link href="https://www.instagram.com/" target="_blank">
                Page Instagram <ExternalLinkIcon />
              </Link>
            </div>
            <div className="footer__wrapper__links__social_medias__item">
              <FacebookIcon className="footer__wrapper__links__social_medias__item__icon" />
              <Link href="https://www.facebook.com/" target="_blank">
                Page Facebook <ExternalLinkIcon />
              </Link>
            </div>
          </div>
          <nav className={clsx('footer__wrapper__links__nav')}>
            <ul className={clsx('footer__wrapper__links__nav__list')}>
              <li>
                <Link href={`#top`}>Haut de la page</Link>
              </li>
              <li>
                <Link href={`/`}>Page d&apos;accueil</Link>
              </li>
              <li>
                <Link href={`/processus`}>Le processus</Link>
              </li>
              <li>
                <Link href={`/atelier`}>Les ateliers</Link>
              </li>
              <li>
                <Link href={`/ateliers`}>Réserver votre atelier</Link>
              </li>
              <li>
                <Link href={`/contact#collectif`}>Le collectif</Link>
              </li>
              <li>
                <Link href={`/contact#formulaire`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
