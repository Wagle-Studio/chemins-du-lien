import './style.scss'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type Props = {
  data: DefaultTypedEditorState
}

export const RichText: React.FC<Props> = ({ data }: Props) => {
  return <ConvertRichText data={data} />
}
