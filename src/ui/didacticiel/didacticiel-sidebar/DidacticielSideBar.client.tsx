'use client'

import './style.scss'
import { usePathname } from 'next/navigation'
import { Cursus } from '@/payload-types'
import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursuses: Cursus[]
}

export const DidacticielSideBar: React.FC<Props> = ({ cursuses, className, ...props }) => {
  const pathname = usePathname()

  return (
    <div className={clsx('didacticiel_sidebar', className)} {...props}>
      <div className="didacticiel_sidebar__wrapper">
        <p className="didacticiel_sidebar__wrapper__title">Nos cursus</p>
        <div className="didacticiel_sidebar__wrapper__menu">
          {cursuses.map((cursus) => {
            const isActive = pathname.includes(`/didacticiel/${cursus.slug}`)
            return (
              <div
                key={cursus.id}
                className={clsx('didacticiel_sidebar__wrapper__menu__item', {
                  'didacticiel_sidebar__wrapper__menu__item--active': isActive,
                })}
              >
                {/* <Link href={`/didacticiel/${cursus.slug}`}>{cursus.title}</Link> */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
