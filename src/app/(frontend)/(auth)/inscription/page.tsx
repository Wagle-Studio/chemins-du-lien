import { SignUpForm } from '@/forms/signup/Component.client'

export default function SignUpPage() {
  return (
    <div className="auth_form_page">
      <h1 className="auth_form_page__title with_bar_left">Inscription</h1>
      <SignUpForm className="auth_form_page__form" />
    </div>
  )
}
