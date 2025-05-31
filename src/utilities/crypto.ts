import crypto from 'crypto'

// Returns a preview token based on the provided path
export const createPreviewToken = (path: string): string => {
  const secret = process.env.PAYLOAD_PREVIEW_SECRET

  if (!secret) {
    throw new Error('Missing PAYLOAD_PREVIEW_SECRET environment variable.')
  }

  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(path)

  return hmac.digest('hex')
}
