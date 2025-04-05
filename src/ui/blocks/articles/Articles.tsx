import './style.scss'
import { Article } from '@/payload-types'
import { Category } from '@/ui/category/Category'
import { Link } from '@/ui/link/Link'

type Props = {
  data: Article[]
}

export const Articles: React.FC<Props> = ({ data }) => {
  const formatdDate = (rawDate: string) => {
    const date = new Date(rawDate)

    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)
  }

  return (
    <div className="articles">
      <h2 className="articles__title">Dernières publication</h2>
      <ul className="articles__list">
        {data.map((article) => (
          <li key={article.id} className="articles__list__item">
            <div className="articles__list__item__header">
              <div className="articles__list__item__header__title">
                <h3>{article.title}</h3>
              </div>
              <p>{formatdDate(article.createdAt)}</p>
            </div>
            <div className="articles__list__item__body">
              <div className="articles__list__item__body__content">
                <div className="articles__list__item__body__content__description">
                  {article.description}
                </div>
                <ul className="articles__list__item__body__content__categories">
                  {article.categories?.map(
                    (category) =>
                      typeof category !== 'number' && (
                        <li key={category.id}>
                          <Category category={category} />
                        </li>
                      ),
                  )}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link href="#" variant="primary">
        Voir tous les articles
      </Link>
    </div>
  )
}
