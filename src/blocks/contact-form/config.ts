import { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contact_form',
  labels: {
    singular: 'Formulaire de contact',
    plural: 'Formulaires de contact',
  },
  imageURL: '/block_illustrations/block_form_contact.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
  ],
}
