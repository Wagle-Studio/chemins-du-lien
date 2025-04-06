'use client'

import './style.scss'
import { HTMLAttributes } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { LoginResponse } from '@/types/response'
import { useAuth } from '@/hooks/useAuth'
import useFetcher from '@/hooks/useFetcher'
import { Button } from '@/ui/button/Button.client'
import { InputText } from '@/ui/inputs/text/InputText'
import { FormValues, defaultValues, schema } from '@/forms/signin/config'

export const SignInForm: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const { fetcher, error, isLoading } = useFetcher<LoginResponse>()
  const { setUser } = useAuth()
  const router = useRouter()

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
      className={clsx('signin_form', className, { loading_spiner: isSubmitting || isLoading })}
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
