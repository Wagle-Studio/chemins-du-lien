import './not-found.scss'
import { Link } from '@/ui/link/Link'

export default function NotFoundPage() {
  return (
    <div className="not_found">
      <div className="not_found__wrapper">
        <div className="not_found__wrapper__content">
          <h1 className="with_bar_left heading_1">Page introuvable</h1>
          <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
        </div>
        <Link href="/" variant="primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
