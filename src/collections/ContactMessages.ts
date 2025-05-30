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
      name: 'status',
      label: 'Statut',
      type: 'select',
      options: [
        { value: 'processed', label: 'Traité' },
        { value: 'pending', label: 'En attente' },
        { value: 'needs_review', label: 'À consulter' },
        { value: 'spam', label: 'Spam' },
        { value: 'archived', label: 'Archivé' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
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
  ],
}
