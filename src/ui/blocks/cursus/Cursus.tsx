import './style.scss'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/link/Link'

type Props = {
  data: ExtractBlock<AllBlocks, 'cursus'>
}

export const Cursus: React.FC<Props> = ({ data }) => {
  return (
    <div className="cursus">
      <div className="cursus__card">
        <div className="cursus__card__content">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        {typeof data.internalLink.article !== 'number' && (
          <Link href={data.internalLink.article.slug ?? '#'} variant="primary">
            {data.internalLink.label}
          </Link>
        )}
      </div>
    </div>
  )
}
