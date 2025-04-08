import * as yup from 'yup'

export type FormValues = {
  email: string
  password: string
}

export const schema: yup.ObjectSchema<FormValues> = yup.object({
  email: yup.string().email('Email invalide').required('L’email est requis'),
  password: yup
    .string()
    .min(3, 'Le mot de passe doit faire au moins 3 caractères')
    .max(100, 'Le mot de passe est trop long')
    .required('Le mot de passe est requis'),
})

export const defaultValues: FormValues = {
  email: '',
  password: '',
}
