'use client'

import './style.scss'
import { Resolver, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { User } from '@/payload-types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import clsx from 'clsx'
import { useAuth } from '@/auth/useAuth'
import useFetcher from '@/hooks/useFetcher'
import { Button } from '@/ui/button/Component.client'
import { InputText } from '@/ui/inputs/text/Component.client'

type FormValues = {
  email: string
  password: string
}

type LoginResponse = {
  user: User
  token: string
}

const schema: yup.ObjectSchema<FormValues> = yup.object({
  email: yup.string().email('Email invalide').required('L’email est requis'),
  password: yup
    .string()
    .min(3, 'Le mot de passe doit faire au moins 3 caractères')
    .max(100, 'Le mot de passe est trop long')
    .required('Le mot de passe est requis'),
})

const defaultValues: FormValues = {
  email: '',
  password: '',
}

export const SignInForm: React.FC = ({ ...props }) => {
  const router = useRouter()
  const { setUser } = useAuth()
  const { fetcher, error, isLoading } = useFetcher<LoginResponse>()

  const onSubmit = async (data: FormValues) => {
    const { data: result } = await fetcher('/api/users/login', {
      method: 'POST',
      credentials: 'include',
      body: data,
    })

    if (result) {
      setUser(result.user)
      router.push('/')
    }
  }

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues,
  })

  return (
    <form
      className={clsx('signin_form', { 'loading-spiner': isSubmitting || isLoading })}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <p>{error}</p>}
      <fieldset className="signin_form__fieldset">
        <InputText<FormValues>
          control={control}
          name="email"
          label="Email"
          type="email"
          inputProps={{ autoComplete: 'email' }}
          placeholder="exemple@gmail.com"
        />
        <InputText<FormValues>
          control={control}
          name="password"
          label="Mot de passe"
          type="password"
          inputProps={{ autoComplete: 'current-password' }}
          placeholder="********"
        />
      </fieldset>

      <Button type="submit" disabled={!isValid || isSubmitting}>
        Me connecter
      </Button>
    </form>
  )
}
