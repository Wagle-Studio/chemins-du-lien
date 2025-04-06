import { User } from '@/payload-types'
import * as yup from 'yup'

export type FormValues = {
  email: string
  firstname: string
  lastname: string
  password: string
  verifyPassword: string
}

export const schema: yup.ObjectSchema<FormValues> = yup.object({
  email: yup.string().email('Email invalide').required('L’email est requis'),
  firstname: yup
    .string()
    .min(2, 'Le prénom de passe doit faire au moins 2 caractères')
    .max(20, 'Le prénom ne doit pas dépasser 20 caractères')
    .required('Le prénom est requis'),
  lastname: yup
    .string()
    .min(2, 'Le nom de passe doit faire au moins 2 caractères')
    .max(20, 'Le nom ne doit pas dépasser 20 caractères')
    .required('Le nom est requis'),
  password: yup
    .string()
    .min(3, 'Le mot de passe doit faire au moins 3 caractères')
    .max(50, 'Le mot de passe ne doit pas dépasser 50 caractères')
    .required('Le mot de passe est requis'),
  verifyPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
    .required('La confirmation est requise'),
})

export const defaultValues: FormValues = {
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  verifyPassword: '',
}
