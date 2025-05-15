'use client'

import './style.scss'
import { HTMLAttributes } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { RegisterResponse } from '@/types/response'
import { useAuth } from '@/hooks/useAuth'
import useFetcher from '@/hooks/useFetcher'
import { Button } from '@/ui/button/Button.client'
import { InputText } from '@/ui/inputs/text/InputText'
import { FormValues, defaultValues, schema } from '@/forms/signup/config'

export const SignUpForm: React.FC<HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const { fetcher, error, isLoading } = useFetcher<RegisterResponse>()
  const { setUser } = useAuth()
  const router = useRouter()

  const onSubmit = async (data: FormValues) => {
    const { ...payloadData } = data

    const { data: result } = await fetcher('/api/register', {
      method: 'POST',
      credentials: 'include',
      body: payloadData,
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
      className={clsx('signup_form', className, { loading_spiner: isSubmitting || isLoading })}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <p>{error}</p>}
      <fieldset className="signup_form__fieldset">
        <InputText<FormValues>
          control={control}
          name="email"
          label="Email"
          type="email"
          inputProps={{ autoComplete: 'email' }}
          placeholder="exemple@gmail.com"
        />
        <InputText<FormValues> control={control} name="firstname" label="Prénom" type="text" />
        <InputText<FormValues> control={control} name="lastname" label="Nom" type="text" />
        <InputText<FormValues>
          control={control}
          name="password"
          label="Mot de passe"
          type="password"
          inputProps={{ autoComplete: 'new-password' }}
          placeholder="********"
        />
        <InputText<FormValues>
          control={control}
          name="verifyPassword"
          label="Confirmer le mot de passe"
          type="password"
          inputProps={{ autoComplete: 'new-password' }}
          placeholder="********"
        />
      </fieldset>
      <Button type="submit" disabled={!isValid || isSubmitting || isLoading}>
        Créer mon compte
      </Button>
    </form>
  )
}
