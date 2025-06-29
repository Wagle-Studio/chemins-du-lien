'use client'

import './article-next-workshops.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import { Workshop } from '@/payload-types'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/atoms/link/Link'
import { WorkshopListHighlight } from '@/ui/molecules/workshop-list-highlight/WorkshopListHighlight'
import { useArticleNextWorkshopsAnimation } from './useArticleNextWorkshopsAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'article_next_workshops'>
  workshops: Workshop[]
}

export const ArticleNextWorkshop: React.FC<Props> = ({ data, workshops }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  useArticleNextWorkshopsAnimation(sectionRef, descriptionRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('article_next_workshops', {
        'article_next_workshops--background': data.background,
      })}
    >
      <div className="article_next_workshops__wrapper">
        <h2 className="heading_1">Nos prochains ateliers</h2>
        {workshops.length > 0 && <WorkshopListHighlight data={workshops} />}
        <div className="article_next_workshops__wrapper__cta">
          <Link href="/atelier" variant="primary" internalLink>
            Découvrir les ateliers
          </Link>
          <Link href="/ateliers" variant="ghost" internalLink>
            Voir tous les ateliers
          </Link>
        </div>
      </div>
    </section>
  )
}
