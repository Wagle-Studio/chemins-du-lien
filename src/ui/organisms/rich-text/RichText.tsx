import './rich-text.scss'

import clsx from 'clsx'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = {
  data: ExtractBlock<AllBlocks, 'content'>
}

export const RichText: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      {data.richText && (
        <section
          className={clsx('rich_text_block', { 'rich_text_block--background': data.background })}
        >
          <div className="rich_text_block__wrapper">
            <ConvertRichText data={data.richText} />
          </div>
        </section>
      )}
    </>
  )
}
