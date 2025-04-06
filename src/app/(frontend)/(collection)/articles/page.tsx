import React from 'react'
import { getCollection } from '@/utilities/payload/collections'
import { ArticleList } from '@/ui/article-list/ArticleList.client'

export default async function ArticlesPage() {
  const categories = await getCollection('categories', 1)

  return <ArticleList categories={categories} />
}
