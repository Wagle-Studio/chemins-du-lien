import './style.scss'
import clsx from 'clsx'
import { ExerciceDocument } from '@/types/collections'
import { RenderBlocks } from '@/blocks/RenderBlocks'

interface Props extends React.HTMLAttributes<HTMLElement> {
  exercice: ExerciceDocument
}

export const Exercice: React.FC<Props> = ({ exercice, className, ...props }) => {
  return (
    <div className={clsx('exercice', className)} {...props}>
      <RenderBlocks blocks={exercice.blocks} />
    </div>
  )
}
