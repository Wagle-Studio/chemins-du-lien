import type { CollectionConfig } from 'payload'
import { useUniqueSlug } from '@/hooks/useUniqueSlug'

export const Workshops: CollectionConfig = {
  slug: 'workshops',
  labels: {
    singular: 'Atelier',
    plural: 'Ateliers',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'on-site',
      label: 'En présentiel',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'meeting-location',
      label: 'Lieu de rendez-vous',
      type: 'text',
      required: true,
    },
    {
      name: 'capacity',
      label: 'Nombre de place',
      type: 'number',
      required: true,
    },
    {
      name: 'status',
      label: 'Statut',
      type: 'select',
      options: [
        { value: 'programmed', label: 'Programmé' },
        { value: 'confirmed', label: 'Confirmé' },
        { value: 'canceled', label: 'Annulé' },
        { value: 'reported', label: 'Reporté' },
      ],
      required: true,
    },
    {
      name: 'categories',
      label: 'Catégories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
  ],
  hooks: {
    beforeChange: [useUniqueSlug],
  },
}
