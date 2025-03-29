import React from 'react'
import { getCollection } from '@/utilities/payload-utils'
import { DidacticielLayout } from '@/ui/didacticiel-layout/Component.client'

export default async function DidacticielRootLayout({ children }: React.PropsWithChildren) {
  const cursuses = await getCollection('cursus')

  return <DidacticielLayout cursuses={cursuses}>{children}</DidacticielLayout>
}
