import './style.scss'
import { CursusDocument, ExerciceDocument } from '@/types/collections'
import { ExerciceHeader } from '@/ui/exercice-header/Component.client'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
  exercice: ExerciceDocument
  exerciceSlugs: string[]
}

export const ExerciceLayout: React.FC<Props> = ({
  children,
  cursus,
  exercice,
  exerciceSlugs,
  ...props
}) => {
  return (
    <div className="exercice_layout" {...props}>
      <ExerciceHeader cursus={cursus} exercice={exercice} exerciceSlugs={exerciceSlugs} />
      {children}
    </div>
  )
}
