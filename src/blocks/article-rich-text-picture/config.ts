import { Block } from 'payload'

export const ArticleRichTextPicture: Block = {
  slug: 'article_rich_text_picture',
  labels: {
    singular: 'Contenu libre avec image',
    plural: 'Contenus libres avec image',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_article_content_picture.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'content',
      label: 'Contenu',
      type: 'richText',
      required: true,
    },
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
