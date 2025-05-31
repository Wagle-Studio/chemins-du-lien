'use client'

// TODO : Extract list and creae organism + molecule.

import './workshop-list.scss'

import { useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import { useRouter, useSearchParams } from 'next/navigation'
import { Workshop } from '@/payload-types'
import { Category } from '@/payload-types'
import { WorkshopsResponse } from '@/types/response'
import useFetcher from '@/hooks/useFetcher'
import { WorkshopTeaser } from '@/ui/molecules/workshop-teaser/WorkshopTeaser'
import { FormValues } from '@/ui/molecules/forms/workshop-filters/config'
import { WorkshopFiltersForm } from '@/ui/molecules/forms/workshop-filters/WorkshopFiltersForm'
import { useWorkshopListAnimation } from './useWorkshopListAnimation'

interface WorkshopListProps {
  categories: Category[]
}

export const WorkshopList: React.FC<WorkshopListProps> = ({ categories }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get('categorie')

  const listRef = useRef<HTMLDivElement>(null)
  const [workshops, setWorkshops] = useState<Workshop[]>([])

  const { fetcher, error, isLoading } = useFetcher<WorkshopsResponse>()

  useEffect(() => {
    fetchFilteredWorkshops(fetcher, selectedCategory, setWorkshops)
  }, [selectedCategory, fetcher])

  useWorkshopListAnimation(listRef, workshops)

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
        <div
          ref={listRef}
          className={clsx('workshop_collection_layout__grid__list', { loading_spiner: isLoading })}
        >
          {!error &&
            workshops.length >= 1 &&
            workshops.map((workshop) => (
              <WorkshopTeaser key={workshop.id} data={workshop} variant="highlight" />
            ))}

          {!error && workshops.length === 0 && (
            <div className="workshop_collection_layout__grid__list__empty">
              <p className="workshop_collection_layout__grid__list__empty__msg">
                Aucun atelier ne correspond à vos filtres.
              </p>
              <p className="workshop_collection_layout__grid__list__empty__msg">
                Essayez d’élargir votre recherche ou de réinitialiser les filtres.
              </p>
            </div>
          )}
          {error && (
            <div className="workshop_collection_layout__grid__list__error">
              <p className="workshop_collection_layout__grid__list__error__msg">
                Une erreur est survenue lors du chargement des ateliers.
              </p>
              <p className="workshop_collection_layout__grid__list__error__msg">
                Notre équipe technique a été informée et travaille à résoudre le problème.
              </p>
            </div>
          )}
        </div>
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
