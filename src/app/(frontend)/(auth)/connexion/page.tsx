import { SignInForm } from '@/forms/signin/Component.client'

export default function SignInPage() {
  return (
    <div className="auth_form_page">
      <h1 className="auth_form_page__title with-bar-left">Connexion</h1>
      <SignInForm className="auth_form_page__form" />
    </div>
  )
}
