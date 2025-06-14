import { Block } from 'payload'
import { RichTextFull } from '@/fields/RichTextFull'

export const ArticleRichTextPicture: Block = {
  slug: 'article_rich_text_picture',
  labels: {
    singular: 'Contenu libre avec image',
    plural: 'Contenus libres avec image',
  },
  imageURL: '/block_illustrations/block_article_content_picture.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    RichTextFull('content', 'Contenu', true),
    {
      name: 'image-position',
      label: "Position de l'image",
      type: 'select',
      options: [
        { value: 'left', label: 'À gauche du contenu' },
        { value: 'right', label: 'À droite du contenu' },
      ],
      required: true,
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
