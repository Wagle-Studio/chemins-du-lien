import './style.scss'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/link/Link'

type Props = {
  data: ExtractBlock<AllBlocks, 'cursus'>
}

export const CursusBlock: React.FC<Props> = ({ data }) => {
  return (
    <div className="cursus_block">
      <div className="cursus_block__card">
        <div className="cursus_block__card__content">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
        <Link href="/didacticiel" variant="primary">
          Découvrez nos cursus
        </Link>
      </div>
    </div>
  )
}
