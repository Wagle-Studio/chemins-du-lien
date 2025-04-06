import React from 'react'
import { getCollection } from '@/utilities/payload/collections'
import { DidacticielLayout } from '@/ui/didacticiel/didacticiel-layout/DidacticielLayout'

export default async function DidacticielRootLayout({ children }: React.PropsWithChildren) {
  const cursuses = await getCollection('cursus')

  return <DidacticielLayout cursuses={cursuses}>{children}</DidacticielLayout>
}
