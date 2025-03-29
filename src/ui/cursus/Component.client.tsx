'use client'

import './style.scss'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { CursusDocument } from '@/types/collections'
import { Link } from '@/ui/link/Component.client'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
}

export const Cursus: React.FC<Props> = ({ cursus, ...props }) => {
  return (
    <div className="cursus" {...props}>
      <div className="cursus__content">
        {cursus.blocks && cursus.blocks?.length > 0 && <RenderBlocks blocks={cursus.blocks} />}
        {cursus.blocks && cursus.blocks?.length == 0 && <p>Pas d'informations supplémentaires.</p>}
      </div>
      <ul className="cursus__exercices">
        {cursus.exercices?.map(
          (exercice, index) =>
            typeof exercice !== 'number' && (
              <li key={exercice.id} className="cursus__exercices__item">
                <p>{[index + 1, exercice.title].join(' - ')}</p>
                <Link
                  href={`/didacticiel/${cursus.slug}/${exercice.slug}`}
                  variant="primary"
                  size="small"
                >
                  Commencer
                </Link>
              </li>
            ),
        )}
      </ul>
    </div>
  )
}
