import * as yup from 'yup'

export type FormValues = {
  category: string
}

export const schema: yup.ObjectSchema<FormValues> = yup.object({
  category: yup.string().required('Veuillez séléctionner une thématique'),
})

export const defaultValues: FormValues = {
  category: '',
}
