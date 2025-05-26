'use client'

import './style.scss'

import clsx from 'clsx'
import Image from 'next/image'
import { useRef } from 'react'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { StarIcon } from '@/ui/atoms/icons/StarIcon'
import { Link } from '@/ui/atoms/link/Link'
import { useBookAuthorAnimation } from './useBookAuthorAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'book'>
}

export const Book: React.FC<Props> = ({ data }) => {
  const authorRef = useRef<HTMLDivElement>(null)

  useBookAuthorAnimation(authorRef)

  return (
    <section className={clsx('book_block', { 'book_block--background': data.background })}>
      <div className="book_block__wrapper">
        <div className="book_block__wrapper__product">
          {data.product['product-picture'] &&
            typeof data.product['product-picture'] !== 'number' &&
            data.product['product-picture'].sizes?.content?.url &&
            data.product['product-picture'].sizes?.content?.width &&
            data.product['product-picture'].sizes?.content?.height && (
              <Image
                className="book_block__wrapper__product__picture"
                src={data.product['product-picture'].sizes.content.url}
                alt={data.product['product-picture'].alt}
                width={data.product['product-picture'].sizes.content.width}
                height={data.product['product-picture'].sizes.content.height}
                quality={100}
              />
            )}
        </div>
        <div className="book_block__wrapper__main">
          <div className="book_block__wrapper__main__card">
            <div className="book_block__wrapper__main__card__header">
              <h2 className="heading_3">{data.title}</h2>
              <div className="book_block__wrapper__main__card__header__evaluation">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      className="book_block__wrapper__main__card__header__evaluation__item"
                    />
                  ))}
              </div>
            </div>
            <div className="book_block__wrapper__main__card__body">
              <ConvertRichText data={data.product.comment} />
              <div className="book_block__wrapper__main__card__body__cta">
                <Link href={data.product['shop-url']} variant="ghost" target="_blank" externalLink>
                  Les commentaires
                </Link>
                <Link
                  href={data.product['shop-url']}
                  variant="primary"
                  target="_blank"
                  externalLink
                >
                  Voir sur Amazon
                </Link>
              </div>
            </div>
          </div>
          <div ref={authorRef} className="book_block__wrapper__main__author with_bar_left">
            <div className="book_block__wrapper__main__author__identity">
              {data.author.picture &&
                typeof data.author.picture !== 'number' &&
                data.author.picture.sizes?.avatar?.url &&
                data.author.picture.sizes?.avatar?.width &&
                data.author.picture.sizes?.avatar?.height && (
                  <Image
                    className="book_block__wrapper__main__author__picture"
                    src={data.author.picture.sizes.avatar.url}
                    alt={data.author.picture.alt}
                    width={data.author.picture.sizes.avatar.width}
                    height={data.author.picture.sizes.avatar.height}
                    quality={100}
                  />
                )}
              <p>{data.author.author}</p>
            </div>
            <div className="book_block__wrapper__main__author__information">
              <p>{data.author.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
