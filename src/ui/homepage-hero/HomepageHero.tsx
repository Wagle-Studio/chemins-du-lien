import './style.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import { Link } from '@/ui/link/Link'

export const HomepageHero: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx('homepage__hero_banner', className)} {...props}>
      <div className="homepage__hero_banner__overlay">
        <div className="homepage__hero_banner__overlay__content">
          <div className="homepage__hero_banner__overlay__content__wrapper">
            <div className="homepage__hero_banner__overlay__content__wrapper__title">
              <p className="heading_1">Chemins du lien</p>
              <p className="heading_3">de soi à l'autre</p>
            </div>
            <div className="homepage__hero_banner__overlay__content__wrapper__cta">
              <Link href="/" variant="primary">
                Découvrir le processus
              </Link>
              <Link href="/" variant="ghost">
                Nos ateliers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
