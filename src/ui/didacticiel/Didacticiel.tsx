import './style.scss'
import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export const Didacticiel: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx('didacticiel', className)} {...props}>
      <h2>Un didacticiel intuitif</h2>
      <p>
        Ce didacticiel vous guide à travers des mises en situation concrètes pour vous entraîner à
        réguler les tensions, relire vos échanges et mieux comprendre vos réactions.
      </p>
    </div>
  )
}
