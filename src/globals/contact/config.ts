import { GlobalConfig } from 'payload'
import { RichText } from '@/blocks/rich-text/config'
import { Members } from '@/blocks/members/config'
import { Book } from '@/blocks/book/config'
import { Faq } from '@/blocks/faq/config'
import { Instagram } from '@/blocks/instagram/config'
import { ContactForm } from '@/blocks/contact-form/config'
import { SEOFields } from '@/fields/SEOFields'

export const ContactPage: GlobalConfig = {
  slug: 'contact',
  label: 'Page de contact',
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenu',
          fields: [
            {
              name: 'banner',
              label: 'Image de banière',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'title',
              label: 'Titre principal',
              type: 'text',
              required: true,
            },
            {
              name: 'blocks',
              label: 'Blocs de la page',
              type: 'blocks',
              blocks: [RichText, Members, Book, Faq, Instagram, ContactForm],
            },
          ],
        },
        ...SEOFields.tabs,
      ],
    },
  ],
}
