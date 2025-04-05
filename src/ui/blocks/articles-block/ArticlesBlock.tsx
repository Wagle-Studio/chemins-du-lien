import './style.scss'
import { Article } from '@/payload-types'
import { ArticleTeaser } from '@/ui/article-teaser/ArticleTeaser'
import { Link } from '@/ui/link/Link'

type Props = {
  data: Article[]
}

export const ArticlesBlock: React.FC<Props> = ({ data }) => {
  return (
    <div className="articles_block">
      <h2 className="articles_block__title">Dernières publication</h2>
      <ul className="articles_block__list">
        {data.map((article) => (
          <li key={article.id} className="articles_block__list__item">
            <Link href={`/articles/${article.slug}`}>
              <ArticleTeaser data={article} />
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/articles" variant="primary">
        Voir tous les articles
      </Link>
    </div>
  )
}
