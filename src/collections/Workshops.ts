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
      name: 'type',
      label: "Type d'évènement",
      type: 'select',
      options: [
        { value: 'in_person', label: 'En présentiel' },
        { value: 'remote', label: 'En visio' },
        { value: 'hybrid', label: 'Hybride (présentiel + visio)' },
        { value: 'other', label: 'Autre' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
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
      name: 'state',
      label: 'Statut',
      type: 'select',
      options: [
        { value: 'programmed', label: 'Programmé' },
        { value: 'confirmed', label: 'Confirmé' },
        { value: 'canceled', label: 'Annulé' },
        { value: 'reported', label: 'Reporté' },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Catégories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    beforeChange: [useUniqueSlug],
  },
}
