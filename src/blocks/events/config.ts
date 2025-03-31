import { Block } from 'payload'

export const Events: Block = {
  slug: 'events',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: ['Les trois prochains événements'],
      required: true,
    },
  ],
}
