import './style.scss'
import { Link } from '@/ui/link/Component.client'
import type { AllBlocks, ExtractBlock } from '@/blocks'

type Props = ExtractBlock<AllBlocks, 'discoveries'>

export const Discoveries: React.FC<Props> = ({ cards }) => {
  return (
    <div className="discoveries">
      <ul className="discoveries__cards">
        {cards?.map((card) => (
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
