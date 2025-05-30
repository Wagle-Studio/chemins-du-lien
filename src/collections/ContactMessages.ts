import type { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: {
    singular: 'Message de contact',
    plural: 'Messages de contact',
  },
  admin: {
    useAsTitle: 'subject',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: false,
  },
  fields: [
    {
      name: 'firstname',
      label: 'Prénom',
      type: 'text',
      required: true,
    },
    {
      name: 'lastname',
      label: 'Nom',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      required: true,
    },
    {
      name: 'subject',
      label: 'Sujet',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'sentAt',
      label: 'Envoyé le',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [() => new Date()],
      },
    },
    {
      name: 'processed',
      label: 'Traité',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
