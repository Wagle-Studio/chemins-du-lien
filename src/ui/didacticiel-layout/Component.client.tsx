'use client'

import './style.scss'
import { Cursus } from '@/payload-types'
import { DidacticielSideBar } from '@/ui/didacticiel-sidebar/Component.client'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursuses: Cursus[]
}

export const DidacticielLayout: React.FC<Props> = ({ children, cursuses }) => {
  return (
    <div className="didacticiel_layout">
      <DidacticielSideBar cursuses={cursuses} />
      {children}
    </div>
  )
}
