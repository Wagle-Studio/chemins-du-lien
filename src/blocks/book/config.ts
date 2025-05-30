import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const Book: Block = {
  slug: 'book',
  labels: {
    singular: 'Livre Jean-Luc Berger',
    plural: 'Livres Jean-Luc Berger',
  },
  imageURL: 'http://localhost:3000/block_illustrations/block_book.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    {
      name: 'product',
      label: 'Livre',
      type: 'group',
      fields: [
        {
          name: 'product-picture',
          label: 'Couverture du livre',
          type: 'upload',
          relationTo: 'media',
        },
        RichTextMinimal('comment', 'Avis client', true),
        {
          name: 'comment-url',
          label: 'Lien vers les commentaires',
          type: 'text',
        },
        {
          name: 'shop-url',
          label: 'Lien vers la page du produit',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'author',
      label: 'Auteur',
      type: 'group',
      fields: [
        {
          name: 'picture',
          label: 'Photo de l’auteur',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'author',
          label: 'Nom de l’auteur',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
