'use client'

import './style.scss'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Article, Category } from '@/payload-types'
import clsx from 'clsx'
import { ArticlesResponse } from '@/types/response'
import useFetcher from '@/hooks/useFetcher'
import { ArticleFiltersForm } from '@/forms/article-filters/ArticleFiltersForm.client'
import { FormValues } from '@/forms/article-filters/config'
import { ArticleTeaser } from '@/ui/article-teaser/ArticleTeaser'
import { Link } from '@/ui/link/Link'

interface ArticleListProps {
  categories: Category[]
}

export const ArticleList: React.FC<ArticleListProps> = ({ categories }) => {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>([])

  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('categorie')

  const { fetcher, error, isLoading } = useFetcher<ArticlesResponse>()

  useEffect(() => {
    const fetchEvents = async () => {
      const params = new URLSearchParams()

      if (selectedCategory && selectedCategory !== 'tous-les-articles') {
        params.set('category', selectedCategory)
      }

      const { data: articles } = await fetcher(`/api/articles?${params.toString()}`)

      if (articles) setArticles(articles)
    }

    fetchEvents()
  }, [selectedCategory, fetcher])

  const handleFilterChanges = (data: FormValues) => {
    const params = new URLSearchParams(window.location.search)
    params.set('categorie', data.category)
    router.push(`/articles?${params.toString()}`)
  }

  return (
    <div className="article_collection_layout">
      <h2 className="article_collection_layout__title">Articles</h2>
      <div className="article_collection_layout__grid">
        <div className="article_collection_layout__grid__results">
          <p>
            {articles.length} {articles.length > 1 ? 'résultats' : 'résultat'}
          </p>
        </div>
        <div className="article_collection_layout__grid__filter">
          <ArticleFiltersForm categories={categories} onSubmitForm={handleFilterChanges} />
        </div>
        <div
          className={clsx('article_collection_layout__grid__list', { loading_spiner: isLoading })}
        >
          {!error &&
            articles.length >= 1 &&
            articles.map((article) => (
              <Link href={`/articles/${article.slug}`} key={article.id}>
                <ArticleTeaser data={article} />
              </Link>
            ))}
          {!error && !isLoading && articles.length === 0 && (
            <div className="article_collection_layout__grid__list__empty">
              <p className="article_collection_layout__grid__list__empty__msg">
                Aucun article ne correspond à vos filtres.
              </p>
              <p className="article_collection_layout__grid__list__empty__msg">
                Essayez d’élargir votre recherche ou de réinitialiser les filtres.
              </p>
            </div>
          )}
          {error && (
            <div className="article_collection_layout__grid__list__error">
              <p className="article_collection_layout__grid__list__error__msg">
                Une erreur est survenue lors du chargement des articles.
              </p>
              <p className="article_collection_layout__grid__list__error__msg">
                Notre équipe technique a été informée et travaille à résoudre le problème.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
