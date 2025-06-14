import { Block } from 'payload'

export const ArticleNextWorkshops: Block = {
  slug: 'article_next_workshops',
  labels: {
    singular: 'Prochain atelier',
    plural: 'Prochains ateliers',
  },
  imageURL: '/block_illustrations/block_article_next_workshops.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
  ],
}
