import { Category } from '@/payload-types'
import { WorkshopList } from '@/ui/organisms/workshop-list/WorkshopList'

type Props = {
  data: Category[]
}

export const WorkshopsPage = ({ data }: Props) => {
  return <WorkshopList categories={data} />
}
