import './style.scss'
import { Exercice } from '@/payload-types'
import { CursusDocument } from '@/types/collections'
import { Category } from '@/ui/category/Component.client'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
}

export const CursusHeader: React.FC<Props> = ({ cursus, ...props }) => {
  const updatedAt = cursus.updatedAt ? new Date(cursus.updatedAt) : null

  const formatdDate = (date: Date) =>
    new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)

  const formatExercicesSize = (exercices: Exercice[]) =>
    [exercices?.length, exercices?.length > 1 ? 'exercices' : 'exercice'].join(' ')

  return (
    <div className="cursus_header" {...props}>
      <h2>{cursus.title}</h2>
      <ul className="cursus_header__categories">
        {cursus.categories?.map(
          (category) =>
            typeof category !== 'number' && (
              <li key={category.id} className="cursus_header__categories__item">
                <Category category={category} />
              </li>
            ),
        )}
      </ul>
      {(updatedAt || cursus.exercices) && (
        <div className="cursus_header__information">
          {updatedAt && <p>{formatdDate(updatedAt)}</p>}
          {cursus.exercices && (
            <p>
              {formatExercicesSize(
                cursus.exercices.filter((e): e is Exercice => typeof e !== 'number'),
              )}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
