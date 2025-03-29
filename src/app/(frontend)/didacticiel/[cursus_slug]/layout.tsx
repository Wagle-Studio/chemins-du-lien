import { LayoutWithChildren } from '@/types/app'
import { getEntryBySlugCached } from '@/utilities/payload-utils'
import { CursusLayout } from '@/ui/didacticiel/cursus-layout/CursusLayout'

type Props = LayoutWithChildren<'cursus_slug'>

export default async function CursusRootLayout({ children, params }: Props) {
  const { cursus_slug } = await params

  const cursus = await getEntryBySlugCached('cursus', cursus_slug)

  // TODO: handle more properly.
  if (!cursus) {
    return <div>Cursus introuvable</div>
  }

  return <CursusLayout cursus={cursus}>{children}</CursusLayout>
}
