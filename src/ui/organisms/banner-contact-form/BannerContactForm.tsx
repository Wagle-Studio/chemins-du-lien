'use client'

import './banner-contact-form.scss'

import { useRef, useState } from 'react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { ContactForm } from '@/ui/molecules/forms/contact/ContactForm'
import { Link } from '@/ui/atoms/link/Link'
import { InstagramIcon } from '@/ui/atoms/icons/InstagramIcon'
import { useBannerContactFormAnimation } from './useBannerContactFormAnimation'

type Props = {
  data: ExtractBlock<AllBlocks, 'contact_form'>
}

export const BannerContactForm = (data: Props) => {
  const [sendMessageSuccess, setSendMessageSuccess] = useState<boolean>(false)

  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useBannerContactFormAnimation(sectionRef, cardRef)

  return (
    <section id="contact" ref={sectionRef} className="banner_contact_form">
      <h1 className="banner_contact_form__title heading_1">Formulaire de contact</h1>
      <div ref={cardRef} className="banner_contact_form__wrapper">
        <div className="banner_contact_form__wrapper__main">
          <div className="banner_contact_form__wrapper__main__cta">
            <div className="banner_contact_form__wrapper__main__cta__content">
              <h2 className="heading_3">Vous souhaitez prendre contact avec nous ?</h2>
              <p>
                La communication en situation de tension demande de la clarté, de l&rsquo;écoute et
                de la bienveillance. Que ce soit pour un accompagnement, un atelier ou un simple
                échange, nous sommes à votre écoute.
              </p>
              <p>
                Retrouvez-nous sur Instagram pour découvrir des contenus complémentaires, des
                conseils en communication bienveillante et les coulisses de nos ateliers.
              </p>
              <Link
                className="banner_contact_form__wrapper__main__cta__content__link"
                href={'https://www.instagram.com/'}
              >
                <InstagramIcon />
                <span> Instagram Chemins du lien</span>
              </Link>
            </div>
          </div>
          {!sendMessageSuccess && (
            <ContactForm
              sendMessageSuccess={setSendMessageSuccess}
              className="banner_contact_form__wrapper__main__form"
            />
          )}
          {sendMessageSuccess && (
            <div className="banner_contact_form__wrapper__main__form__success">
              <p className="heading_2">
                Merci pour votre message,
                <br /> il a bien été envoyé.
              </p>
              <p>Nous vous répondrons dans les plus brefs délais.</p>
              <Link href={'/'} internalLink variant="ghost">
                Retourner à l&rsquo;accueil
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
