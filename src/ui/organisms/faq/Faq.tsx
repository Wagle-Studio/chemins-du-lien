'use client'

import './faq.scss'

import { useRef, useState } from 'react'
import clsx from 'clsx'
import { Faq as FaqType } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { ArrowRightIcon } from '@/ui/atoms/icons/ArrowRightIcon'
import { Link } from '@/ui/atoms/link/Link'
import { useFaqAnimation } from './useFaqAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'faq'>
  faqs: FaqType[]
}

export const Faq: React.FC<Props> = ({ data, faqs }) => {
  const [currentFaqIndex, setCurrentFaqIndex] = useState<number | null>()
  const sectionRef = useRef<HTMLElement>(null)
  const faqListRef = useRef<HTMLUListElement>(null)

  useFaqAnimation(sectionRef, faqListRef)

  const toggleFaq = (faqIndex: number) => {
    setCurrentFaqIndex(faqIndex === currentFaqIndex ? null : faqIndex)
  }

  return (
    <section
      ref={sectionRef}
      className={clsx('faq_block', {
        'faq_block--background': data.background,
      })}
    >
      <div className="faq_block__wrapper">
        <h2 className="heading_1 with_bar_left">{data.title}</h2>
        <ul ref={faqListRef} className="faq_block__wrapper__list">
          {faqs.map((faq, index) => (
            <li key={faq.id} className="faq_block__wrapper__list__item">
              <div
                className={clsx('faq_block__wrapper__list__item__question', {
                  'faq_block__wrapper__list__item__question--selected': index === currentFaqIndex,
                })}
                onClick={() => toggleFaq(index)}
              >
                <ArrowRightIcon />
                <h3 className="heading_3">{faq.question}</h3>
              </div>
              <div
                className={clsx('faq_block__wrapper__list__item__answer', {
                  'faq_block__wrapper__list__item__answer--selected': index === currentFaqIndex,
                })}
              >
                <RichText data={faq.answer} />
              </div>
            </li>
          ))}
        </ul>
        <div className="faq_block__wrapper__cta">
          <Link href="/contact" variant="primary" internalLink>
            Entrons en contact
          </Link>
          <Link href="/ateliers" variant="ghost" internalLink>
            Nos ateliers
          </Link>
        </div>
      </div>
    </section>
  )
}
