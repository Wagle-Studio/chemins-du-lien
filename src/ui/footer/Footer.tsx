import './style.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Link } from '@/ui/link/Link'
import { InstagramIcon } from '@/ui/icons/InstagramIcon'
import { FacebookIcon } from '@/ui/icons/FacebookIcon'

export const Footer: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx('footer', className)} {...props}>
      <div className="footer__wrapper">
        <div className="footer__wrapper__brand">
          <Link href="/" className="footer__wrapper__brand__name">
            Chemins du lien
            <br />
            <span className="footer__wrapper__brand__name__sub">de soi à l'autre</span>
          </Link>
          <div className="footer__wrapper__brand__mentions">
            <p>© 2025 Chemins du lien – Tous droits réservés.</p>
            <Link href={`/evenements`}>Site réalisé par Wolff Kévin</Link>
          </div>
        </div>
        <div className="footer__wrapper__links">
          <div className="footer__wrapper__links__social_medias">
            <div className="footer__wrapper__links__social_medias__item">
              <InstagramIcon className="footer__wrapper__links__social_medias__item__icon" />
              <Link href={`/evenements`}>Page Instagram</Link>
            </div>
            <div className="footer__wrapper__links__social_medias__item">
              <FacebookIcon className="footer__wrapper__links__social_medias__item__icon" />
              <Link href={`/articles`}>Page Facebook</Link>
            </div>
          </div>
          <nav className={clsx('footer__wrapper__links__nav')}>
            <ul className={clsx('footer__wrapper__links__nav__list')}>
              <li>
                <Link href={`/evenements`}>Haut de la page</Link>
              </li>
              <li>
                <Link href={`/articles`}>Page d'accueil</Link>
              </li>
              <li>
                <Link href={`/inscription`}>Processus</Link>
              </li>
              <li>
                <Link href={`/connexion`}>Ateliers</Link>
              </li>
              <li>
                <Link href={`/didacticiel`}>Le collectif</Link>
              </li>
              <li>
                <Link href={`/connexion`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
