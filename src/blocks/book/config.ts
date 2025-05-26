import { Block } from 'payload'

export const Book: Block = {
  slug: 'book',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'product',
      type: 'group',
      fields: [
        {
          name: 'product-picture',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'comment',
          type: 'richText',
          required: true,
        },
        {
          name: 'comment-url',
          type: 'text',
        },
        {
          name: 'shop-url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'picture',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'background',
      type: 'checkbox',
    },
  ],
}
