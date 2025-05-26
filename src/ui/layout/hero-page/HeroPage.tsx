import './hero-page.scss'

import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { Discover } from '@/payload-types'

type Props = {
  data: Discover
}

export const HeroPage: React.FC<Props> = ({ data, ...props }) => {
  return (
    <section className="page_hero_banner_block" {...props}>
      <div className="page_hero_banner_block__wrapper">
        <div className="page_hero_banner_block__wrapper__content">
          <h1 className="heading_1">{data.title}</h1>
          <div>
            <ConvertRichText data={data.introduction} />
          </div>
        </div>
      </div>
    </section>
  )
}
