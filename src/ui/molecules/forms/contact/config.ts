import * as yup from 'yup'

export type FormValues = {
  firstname: string
  lastname: string
  email: string
  subject: string
  message: string
}

export const schema: yup.ObjectSchema<FormValues> = yup.object({
  firstname: yup
    .string()
    .min(2, 'Le prénom doit contenir au moins 2 caractères')
    .max(20, 'Le prénom ne peut pas dépasser 20 caractères')
    .required('Le prénom est requis'),
  lastname: yup
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(20, 'Le nom ne peut pas dépasser 20 caractères')
    .required('Le nom est requis'),
  email: yup.string().email('Email invalide').required('L’email est requis'),
  subject: yup
    .string()
    .min(3, 'Le sujet doit contenir au moins 3 caractères')
    .max(100, 'Le sujet ne peut pas dépasser 100 caractères')
    .required('Le sujet est requis'),
  message: yup
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères')
    .required('Le message est requis'),
})

export const defaultValues: FormValues = {
  firstname: '',
  lastname: '',
  email: '',
  subject: '',
  message: '',
}
