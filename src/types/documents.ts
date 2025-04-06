import { RequiredDataFromCollectionSlug } from 'payload'

export type ArticleDocument = RequiredDataFromCollectionSlug<'articles'>
export type CursusDocument = RequiredDataFromCollectionSlug<'cursus'>
export type ExerciceDocument = RequiredDataFromCollectionSlug<'exercices'>
