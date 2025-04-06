import './style.scss'
import clsx from 'clsx'
import { CursusDocument, ExerciceDocument } from '@/types/documents'
import { ExerciceHeader } from '@/ui/didacticiel/exercice-header/ExerciceHeader'

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
  className,
  ...props
}) => {
  return (
    <div className={clsx('exercice_layout', className)} {...props}>
      <ExerciceHeader cursus={cursus} exercice={exercice} exerciceSlugs={exerciceSlugs} />
      {children}
    </div>
  )
}
