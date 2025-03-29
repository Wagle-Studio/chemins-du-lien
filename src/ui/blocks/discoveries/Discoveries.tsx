import './style.scss'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/link/Link'

type Props = {
  data: ExtractBlock<AllBlocks, 'discoveries'>['cards']
}

export const Discoveries: React.FC<Props> = ({ data }) => {
  return (
    <div className="discoveries">
      <ul className="discoveries__cards">
        {data?.map((card: any) => (
          <li key={card.id}>
            <div className="discoveries__cards__item">
              <div className="discoveries__cards__item__header">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              {typeof card.internalLink.page !== 'number' && (
                <Link href={card.internalLink.page.slug ?? '#'} variant="primary">
                  {card.internalLink.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
