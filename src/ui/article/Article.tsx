import './style.scss'
import React from 'react'
import clsx from 'clsx'
import { ArticleDocument } from '@/types/collections'
import { Category } from '@/ui/category/Category'
import { Avatar } from '@/ui/avatar/Avatar'

interface Props extends React.HTMLAttributes<HTMLElement> {
  article: ArticleDocument
}

export const Article: React.FC<Props> = ({ className, children, article, ...props }) => {
  const author = typeof article.author !== 'number' ? article.author : null
  const updatedAt = article.updatedAt ? new Date(article.updatedAt) : null

  const formatdDate = (date: Date) =>
    new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)

  return (
    <div className={clsx('article', className)} {...props}>
      <div className="article__header">
        <div className="article__header__background"></div>
        <div className="article__header__content">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <ul className="article__header__content__categories">
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
        {(author || updatedAt) && (
          <div className="article__header__bottom">
            {author && (
              <div className="article__header__bottom__author">
                <Avatar user={author} />
                <p>{author.fullName}</p>
              </div>
            )}
            {updatedAt && <p>{formatdDate(updatedAt)}</p>}
          </div>
        )}
      </div>
      {children}
    </div>
  )
}
