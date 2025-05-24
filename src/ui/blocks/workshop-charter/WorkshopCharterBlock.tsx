'use client'

import './style.scss'
import clsx from 'clsx'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/link/Link'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  data: ExtractBlock<AllBlocks, 'workshop_charter'>
}

export const WorkshopCharterBlock: React.FC<Props> = ({ data }: Props) => {
  console.log(data)

  return (
    <section
      className={clsx('instagram_block', { 'instagram_block--background': data.background })}
    >
      <div className="instagram_block__wrapper">
        <div className="instagram_block__wrapper__content">
          <h2 className="heading_2">{data.title}</h2>
          <p className="instagram_block__wrapper__content__subtitle">{data.subtitle}</p>
        </div>
        <div className="instagram_block__wrapper__body">
          <ul className="instagram_block__wrapper__body__posts">
            {data.item?.map((item) => (
              <li key={item.id} className="instagram_block__wrapper__body__posts__item">
                <div className="instagram_block__wrapper__body__posts__item__background"></div>
                <div className="instagram_block__wrapper__body__posts__item__content">
                  <h3 className="heading_3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="instagram_block__wrapper__body__wrapper">
            {data.image &&
              typeof data.image !== 'number' &&
              data.image.sizes?.content?.url &&
              data.image.sizes?.content?.width &&
              data.image.sizes?.content?.height && (
                <Image
                  className="instagram_block__wrapper__body__wrapper__picture"
                  src={data.image.sizes?.content?.url}
                  alt={data.image.alt}
                  width={data.image.sizes.content.width}
                  height={data.image.sizes.content.height}
                  quality={100}
                />
              )}
            <div className="instagram_block__wrapper__body__wrapper__cta">
              <Link href="/ateliers" variant="primary" internalLink>
                Participer à un atelier
              </Link>
              <Link href="/collectif" variant="ghost" internalLink>
                Découvrir le collectif
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
