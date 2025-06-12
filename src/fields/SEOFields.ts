import { TabsField } from 'payload'

export const SEOFields: TabsField = {
  type: 'tabs',
  tabs: [
    {
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          label: 'Meta Title',
          type: 'text',
          maxLength: 60,
          admin: {
            description: 'Titre pour les moteurs de recherche (max. 60 caractères)',
          },
        },
        {
          name: 'metaDescription',
          label: 'Meta Description',
          type: 'textarea',
          maxLength: 160,
          admin: {
            description:
              'Description affichée dans les résultats de recherche (max. 160 caractères)',
          },
        },
        {
          name: 'metaImage',
          label: 'Image de partage (OpenGraph)',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description:
              'Image affichée lors du partage de la page sur les réseaux sociaux ou dans une messagerie',
          },
        },
        {
          name: 'noIndex',
          label: 'Ne pas indexer cette page',
          type: 'checkbox',
          admin: {
            description: "Empêche l'indexation de la page par les moteurs de recherche",
          },
        },
      ],
    },
  ],
}
