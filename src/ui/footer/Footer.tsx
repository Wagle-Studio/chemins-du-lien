import './style.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Link } from '@/ui/link/Link'

export const Footer: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx('footer', className)} {...props}>
      <div className="footer__wrapper">
        <div className="footer__wrapper__brand">
          <Link href="/" className="footer__wrapper__brand__name">
            Insight Mediation
          </Link>
        </div>
        <nav className={clsx('footer__wrapper__nav')}>
          <ul className={clsx('footer__wrapper__nav__list')}>
            <li>
              <Link href={`/evenements`}>Événements</Link>
            </li>
            <li>
              <Link href={`/articles`}>Articles</Link>
            </li>
            <li>
              <Link href={`/didacticiel`}>Didacticiel</Link>
            </li>
            <li>
              <Link href={`/inscription`}>Inscription</Link>
            </li>
            <li>
              <Link href={`/connexion`}>Connexion</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
