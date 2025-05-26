import './style.scss'
import clsx from 'clsx'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'

type Props = {
  data: ExtractBlock<AllBlocks, 'content'>
}

export const ContentBlock: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      {data.richText && (
        <section
          className={clsx('content_block', { 'content_block--background': data.background })}
        >
          <div className="content_block__wrapper">
            <ConvertRichText data={data.richText} />
          </div>
        </section>
      )}
    </>
  )
}
