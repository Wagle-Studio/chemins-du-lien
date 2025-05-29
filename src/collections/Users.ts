import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Utilisateur',
    plural: 'Utilisateurs',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: () => true,
    read: () => true,
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
      name: 'avatar',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'fullName',
      label: 'Nom complet',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            const firstname = data?.firstname ?? ''
            const lastname = data?.lastname ?? ''
            return `${firstname} ${lastname}`.trim()
          },
        ],
      },
    },
  ],
}
