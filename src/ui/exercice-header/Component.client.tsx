import './style.scss'
import { CursusDocument, ExerciceDocument } from '@/types/collections'
import { Link } from '@/ui/link/Component.client'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
  exercice: ExerciceDocument
  exerciceSlugs: string[]
}

export const ExerciceHeader: React.FC<Props> = ({ exercice, cursus, exerciceSlugs, ...props }) => {
  const currentIndex = exercice.slug ? exerciceSlugs.indexOf(exercice.slug) : -1
  const previousExerciceSlug = currentIndex > 0 ? exerciceSlugs[currentIndex - 1] : null
  const nextExerciceSlug =
    currentIndex >= 0 && currentIndex < exerciceSlugs.length - 1
      ? exerciceSlugs[currentIndex + 1]
      : null

  return (
    <div className="exercice_header" {...props}>
      <h3>{currentIndex >= 0 ? `${currentIndex + 1} - ${exercice.title}` : exercice.title}</h3>
      <div className="exercice_header__nav">
        {previousExerciceSlug && (
          <Link
            href={`/didacticiel/${cursus.slug}/${previousExerciceSlug}`}
            variant="primary"
            size="small"
          >
            Précedent
          </Link>
        )}
        {nextExerciceSlug && (
          <Link
            href={`/didacticiel/${cursus.slug}/${nextExerciceSlug}`}
            variant="primary"
            size="small"
          >
            Suivant
          </Link>
        )}
      </div>
    </div>
  )
}
