import { SignUpForm } from '@/forms/signup/SignupForm.client'
import { Link } from '@/ui/link/Link'

export default function SignUpPage() {
  return (
    <div className="auth_form_page">
      <h1 className="auth_form_page__title with_bar_left">Inscription</h1>
      <SignUpForm className="auth_form_page__form" />
      <div className="auth_form_page__links">
        <Link href="/inscription">Vous possedez un compte ? Connectez-vous</Link>
        <Link href="#">Mot de passe oublié ?</Link>
      </div>
    </div>
  )
}
