import './style.scss'
import clsx from 'clsx'
import { CursusDocument } from '@/types/documents'
import { CursusHeader } from '@/ui/didacticiel/cursus-header/CursusHeader'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
}

export const CursusLayout: React.FC<Props> = ({ children, cursus, className, ...props }) => {
  return (
    <div className={clsx('cursus_layout', className)} {...props}>
      <CursusHeader cursus={cursus} />
      {children}
    </div>
  )
}
