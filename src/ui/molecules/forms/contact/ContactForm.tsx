'use client'

import { HTMLAttributes } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import useFetcher from '@/hooks/useFetcher'
import { InputText } from '@/ui/atoms/inputs/text/InputText'
import { Button } from '@/ui/atoms/button/Button'
import { InputTextarea } from '@/ui/atoms/inputs/text-area/InputTextArea'
import { FormValues, defaultValues, schema } from '@/ui/molecules/forms/contact/config'

type Props = {
  sendMessageSuccess: (status: boolean) => void
} & HTMLAttributes<HTMLElement>

export const ContactForm: React.FC<Props> = ({ sendMessageSuccess, className, ...props }) => {
  const { fetcher, error, isLoading } = useFetcher<any>()

  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  })

  const onSubmit = async (data: FormValues) => {
    const payload = { ...data, status: 'pending' }
    const { data: result } = await fetcher('/api/contact-messages', {
      method: 'POST',
      body: payload,
    })

    if (result) {
      reset()
      sendMessageSuccess(true)
    } else {
      sendMessageSuccess(false)
    }
  }

  return (
    <form
      className={clsx('contact_form', className, { loading_spiner: isSubmitting || isLoading })}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <p className="form_message--error">{error}</p>}
      <InputText<FormValues> control={control} name="firstname" label="Prénom" type="text" />
      <InputText<FormValues> control={control} name="lastname" label="Nom" type="text" />
      <InputText<FormValues>
        control={control}
        name="email"
        label="Email"
        type="email"
        inputProps={{ autoComplete: 'email' }}
      />
      <InputText<FormValues> control={control} name="subject" label="Sujet" type="text" />
      <InputTextarea<FormValues> control={control} name="message" label="Message" />
      <Button type="submit" disabled={!isValid || isSubmitting || isLoading} variant="ghost">
        Envoyer mon message
      </Button>
    </form>
  )
}
