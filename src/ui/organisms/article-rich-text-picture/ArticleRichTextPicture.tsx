'use client'

import './article-rich-text-picture.scss'

import { useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { useArticleRichTextPictureAnimation } from './useArticleRichTextPictureAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'article_rich_text_picture'>
}

export const ArticleRichTextPicture: React.FC<Props> = ({ data }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useArticleRichTextPictureAnimation(sectionRef, contentRef)

  return (
    <section
      ref={sectionRef}
      className={clsx('article_rich_text_picture_block', {
        'article_rich_text_picture_block--background': data.background,
      })}
    >
      <div className={'article_rich_text_picture_block__wrapper'}>
        <div ref={contentRef} className="article_rich_text_picture_block__wrapper__content">
          <ConvertRichText data={data.content} />
        </div>
        {data.image &&
          typeof data.image !== 'number' &&
          data.image.sizes?.content?.url &&
          data.image.sizes?.content?.width &&
          data.image.sizes?.content?.height && (
            <Image
              className={clsx('article_rich_text_picture_block__wrapper__picture', {
                'article_rich_text_picture_block__wrapper__picture--image-left':
                  data['image-position'] === 'left',
              })}
              src={data.image.sizes.content.url}
              alt={data.image.alt}
              width={data.image.sizes.content.width}
              height={data.image.sizes.content.height}
              quality={100}
            />
          )}
      </div>
    </section>
  )
}
