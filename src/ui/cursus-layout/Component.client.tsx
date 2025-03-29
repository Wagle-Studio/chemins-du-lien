import './style.scss'
import { CursusDocument } from '@/types/collections'
import { CursusHeader } from '@/ui/cursus-header/Component.client'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
}

export const CursusLayout: React.FC<Props> = ({ children, cursus, ...props }) => {
  return (
    <div className="cursus_layout" {...props}>
      <CursusHeader cursus={cursus} />
      {children}
    </div>
  )
}
