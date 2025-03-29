'use client'

import './style.scss'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { ExerciceDocument } from '@/types/collections'

interface Props extends React.HTMLAttributes<HTMLElement> {
  exercice: ExerciceDocument
}

export const Exercice: React.FC<Props> = ({ exercice, ...props }) => {
  return (
    <div className="exercice" {...props}>
      <RenderBlocks blocks={exercice.blocks} />
    </div>
  )
}
