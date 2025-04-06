import { getPayload } from 'payload'
import configPromise from '@payload-config'

// Initializes Payload with the given config
export const getPayloadClient = async () => getPayload({ config: configPromise })
