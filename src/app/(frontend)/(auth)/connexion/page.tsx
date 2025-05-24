import { SignInForm } from '@/forms/signin/SigninForm.client'
import { Link } from '@/ui/link/Link'

export default function SignInPage() {
  return (
    <div className="auth_form_page">
      <h1 className="auth_form_page__title with_bar_left">Connexion</h1>
      <SignInForm className="auth_form_page__form" />
      <div className="auth_form_page__links">
        <Link href="/inscription">Vous n&apos;avez pas encore de compte ?</Link>
        <Link href="#">Mot de passe oublié ?</Link>
      </div>
    </div>
  )
}
