'use client'

import { HTMLAttributes, useEffect } from 'react'
import { Resolver, useForm } from 'react-hook-form'
import { Category } from '@/payload-types'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { FormValues, schema, defaultValues } from '@/forms/event-filters/config'
import { InputSelect } from '@/ui/inputs/select/InputSelect'

interface EventFiltersFormProps extends HTMLAttributes<HTMLElement> {
  categories: Category[]
  onSubmitForm: (data: FormValues) => void
}

export const EventFiltersForm: React.FC<EventFiltersFormProps> = ({
  className,
  categories,
  onSubmitForm,
  ...props
}) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema) as unknown as Resolver<FormValues>,
    defaultValues,
  })

  useEffect(() => {
    const subscription = watch((values, { name, type }) => {
      if (name === 'category' && type === 'change') {
        handleSubmit(onSubmitForm)()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, handleSubmit, onSubmitForm])

  return (
    <form
      className={clsx('filters_form', className, { loading_spiner: isSubmitting })}
      {...props}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <InputSelect<FormValues>
        control={control}
        name="category"
        label="Thématique"
        labelDisplay={false}
        options={categories}
        optionsValue="slug"
        optionsLabel="title"
        defaultOption={{ value: 'tous-les-evenements', label: 'Tous les événements' }}
      />
    </form>
  )
}
