'use client'

import './process.scss'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { ArrowDiagramFirstIcon } from '@/ui/atoms/icons/ArrowDiagramFirstIcon'
import { ArrowDiagramSecondIcon } from '@/ui/atoms/icons/ArrowDiagramSecondIcon'
import { ArrowDiagramThirdIcon } from '@/ui/atoms/icons/ArrowDiagramThirdIcon'
import { ArrowDiagramFourthIcon } from '@/ui/atoms/icons/ArrowDiagramFourthIcon'
import { useProcessAnimation } from './useProcessAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'process'>
}

export const Process: React.FC<Props> = ({ data }) => {
  const [currentStape, setCurrentStape] = useState<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const stapesRef = useRef<HTMLUListElement>(null)

  useProcessAnimation(sectionRef, stapesRef)

  const startAnimation = (fromIndex: number) => {
    setCurrentStape(fromIndex)
    let stape = fromIndex
    let count = 0

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      count++
      if (count === 10) {
        count = 0
        stape = (stape + 1) % (data.stapes?.length || 1)
        setCurrentStape(stape)
      }
    }, 1000)
  }

  useEffect(() => {
    startAnimation(0)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={clsx('process_block', {
        'process_block--background': data.background,
      })}
    >
      <div className="process_block__wrapper">
        <div className="process_block__wrapper__content">
          <div className="process_block__wrapper__content__header">
            <h1 className="heading_1">{data.title}</h1>
            <h2 className="with_bar_left">{data.subtitle}</h2>
          </div>
          <ul ref={stapesRef} className="process_block__wrapper__content__stapes">
            {data.stapes?.map((stape, index) => (
              <li
                key={stape.id}
                className="process_block__wrapper__content__stapes__item"
                onClick={() => startAnimation(index)}
              >
                <h3
                  className={clsx(
                    'heading_3 process_block__wrapper__content__stapes__item__title',
                    {
                      'process_block__wrapper__content__stapes__item__title--active':
                        currentStape === index,
                      'process_block__wrapper__content__stapes__item__title--done':
                        currentStape > index,
                    },
                  )}
                >
                  <span>{index + 1}</span>
                  {stape.title}
                </h3>
                <div
                  className={clsx('process_block__wrapper__content__stapes__item__description', {
                    'process_block__wrapper__content__stapes__item__description--selected':
                      currentStape === index,
                  })}
                >
                  <ConvertRichText data={stape.description} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="diagram">
          <p className="diagram__title">
            Situation
            <br />
            conflictuelle
          </p>
          <ArrowDiagramFourthIcon
            className={clsx('fourth', { 'fourth--selected': currentStape === 3 })}
            onClick={() => startAnimation(3)}
          />
          <ArrowDiagramFirstIcon
            className={clsx('first', { 'first--selected': currentStape === 0 })}
            onClick={() => startAnimation(0)}
          />
          <ArrowDiagramThirdIcon
            className={clsx('third', { 'third--selected': currentStape === 2 })}
            onClick={() => startAnimation(2)}
          />
          <ArrowDiagramSecondIcon
            className={clsx('second', { 'second--selected': currentStape === 1 })}
            onClick={() => startAnimation(1)}
          />
        </div>
      </div>
    </section>
  )
}
