import './style.scss'
import { Cursus } from '@/payload-types'
import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursuses: Cursus[]
}

export const DidacticielLayout: React.FC<Props> = ({ children, cursuses, className, ...props }) => {
  return (
    <div className={clsx('didacticiel_layout', className)} {...props}>
      {/* <DidacticielSideBar cursuses={cursuses} /> */}
      {children}
    </div>
  )
}
