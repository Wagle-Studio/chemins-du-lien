'use client'

import './workshop-list.scss'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Workshop } from '@/payload-types'
import { Category } from '@/payload-types'
import { WorkshopsResponse } from '@/types/response'
import useFetcher from '@/hooks/useFetcher'
import { FormValues } from '@/ui/molecules/forms/workshop-filters/config'
import { WorkshopFiltersForm } from '@/ui/molecules/forms/workshop-filters/WorkshopFiltersForm'
import { WorkshopListTeaser } from '@/ui/molecules/workshop-list-teaser/WorkshopListTeaser'

interface WorkshopListProps {
  categories: Category[]
}

export const WorkshopList: React.FC<WorkshopListProps> = ({ categories }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('categorie')

  const [workshops, setWorkshops] = useState<Workshop[]>([])

  const { fetcher, error, isLoading } = useFetcher<WorkshopsResponse>()

  useEffect(() => {
    fetchFilteredWorkshops(fetcher, selectedCategory, setWorkshops)
  }, [selectedCategory, fetcher])

  const handleFilters = (data: FormValues) => {
    updateURLParams(router, data)
  }

  return (
    <section className="workshop_collection_layout">
      <h1 className="heading_1">Les ateliers</h1>
      <div className="workshop_collection_layout__grid">
        <div className="workshop_collection_layout__grid__results">
          <p>
            {workshops.length} {workshops.length > 1 ? 'résultats' : 'résultat'}
          </p>
        </div>
        <div className="workshop_collection_layout__grid__filter">
          <WorkshopFiltersForm categories={categories} onSubmitForm={handleFilters} />
        </div>
        <WorkshopListTeaser data={workshops} isError={error} isLoading={isLoading} />
      </div>
    </section>
  )
}

const fetchFilteredWorkshops = async (
  fetcher: ReturnType<typeof useFetcher>['fetcher'],
  selectedCategory: string | null,
  setWorkshops: React.Dispatch<React.SetStateAction<Workshop[]>>,
) => {
  const params = new URLSearchParams()

  if (selectedCategory && selectedCategory !== 'tous-les-ateliers') {
    params.set('category', selectedCategory)
  }

  const { data } = await fetcher(`/api/workshops-filter?${params.toString()}`)
  if (data) setWorkshops(data as Workshop[])
}

const updateURLParams = (router: ReturnType<typeof useRouter>, data: FormValues) => {
  const params = new URLSearchParams(window.location.search)
  params.set('categorie', data.category)
  router.push(`/ateliers?${params.toString()}`)
}
