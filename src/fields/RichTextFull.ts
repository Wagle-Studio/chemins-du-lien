import {
  BoldFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const RichTextFull = (
  name = 'description',
  label = 'Description',
  required: true,
): Field => ({
  name,
  label,
  required,
  type: 'richText',
  editor: lexicalEditor({
    features: () => [
      ParagraphFeature(),
      BoldFeature(),
      ItalicFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
      UnderlineFeature(),
      StrikethroughFeature(),
      LinkFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      InlineToolbarFeature(),
    ],
  }),
})
