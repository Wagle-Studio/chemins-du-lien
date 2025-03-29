import { Field } from 'payload'

export const internalLink: Field = {
  name: 'internalLink',
  type: 'group',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
  ],
}
