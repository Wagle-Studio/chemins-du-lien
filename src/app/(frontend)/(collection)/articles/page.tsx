import React from 'react'
import { getCollection } from '@/utilities/payload-utils'
import { ArticleTeaser } from '@/ui/article-teaser/ArticleTeaser'
import { Link } from '@/ui/link/Link'

export default async function ArticlesPage() {
  const articles = await getCollection('articles', 1)

  return (
    <div className="collection_layout">
      <h2 className="collection_layout__title">Articles</h2>
      <div className="collection_layout__grid">
        <div className="collection_layout__grid__filter"></div>
        <ul className="collection_layout__grid__list">
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.slug}`}>
                <ArticleTeaser data={article} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
