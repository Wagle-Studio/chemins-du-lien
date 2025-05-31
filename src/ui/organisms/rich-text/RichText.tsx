'use client'

import './rich-text.scss'

import clsx from 'clsx'
import { useRef } from 'react'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { useRichTextAnimation } from './useRichTextAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'rich_text'> | ExtractBlock<AllBlocks, 'article_rich_text'>
  full?: boolean
}

export const RichText: React.FC<Props> = ({ data, full = false }: Props) => {
  const sectionRef = useRef<HTMLElement>(null)

  useRichTextAnimation(sectionRef)

  return (
    <>
      {data.richText && (
        <section
          ref={sectionRef}
          className={clsx('rich_text_block', {
            'rich_text_block--background': data.background,
          })}
        >
          <div className={clsx('rich_text_block__wrapper', { rich_text_full: full })}>
            <ConvertRichText data={data.richText} />
          </div>
        </section>
      )}
    </>
  )
}
