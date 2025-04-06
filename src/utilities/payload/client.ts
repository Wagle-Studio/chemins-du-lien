import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { getEntryBySlug } from '@/utilities/payload/collections'
import { getGlobal } from '@/utilities/payload/globals'

// Initializes Payload with the given config
export const getPayloadClient = async () => getPayload({ config: configPromise })
