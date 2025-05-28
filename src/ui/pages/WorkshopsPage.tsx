// TODO : Work on fallback.

import React, { Suspense } from 'react'
import { Category } from '@/payload-types'
import { WorkshopList } from '@/ui/molecules/workshop-list/WorkshopList'

type Props = {
  data: Category[]
}

export const WorkshopsPage = async ({ data }: Props) => {
  return (
    <Suspense fallback={<div>Chargement des ateliers...</div>}>
      <WorkshopList categories={data} />
    </Suspense>
  )
}
