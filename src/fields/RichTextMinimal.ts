import {
  BoldFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'
import { Field } from 'payload'

export const RichTextMinimal = (
  name = 'description',
  label = 'Description',
  required: true,
): Field => ({
  name,
  label,
  required,
  type: 'richText',
  editor: lexicalEditor({
    features: () => [ParagraphFeature(), BoldFeature(), ItalicFeature(), InlineToolbarFeature()],
  }),
})
