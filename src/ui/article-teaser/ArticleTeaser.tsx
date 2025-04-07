import './style.scss'
import { Article } from '@/payload-types'
import clsx from 'clsx'
import { Tag } from '@/ui/tag/Tag'

type Props = {
  data: Article
} & React.HTMLAttributes<HTMLElement>

export const ArticleTeaser: React.FC<Props> = ({ data, className, ...props }) => {
  const formatdDate = (rawDate: string) => {
    const date = new Date(rawDate)

    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)
  }

  return (
    <article className={clsx('article_teaser', className)} {...props}>
      <div className="article_teaser__header">
        <div className="article_teaser__header__title">
          <h3>{data.title}</h3>
        </div>
        <p>{formatdDate(data.createdAt)}</p>
      </div>
      <div className="article_teaser__body">
        <div className="article_teaser__body__content">
          <div className="article_teaser__body__content__description">{data.description}</div>
          <ul className="article_teaser__body__content__categories">
            {data.categories?.map(
              (category) =>
                typeof category !== 'number' && (
                  <li key={category.id}>
                    <Tag label={category.title} />
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </article>
  )
}
