'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

export const LivePreviewListener: React.FC = () => {
  const router = useRouter()

  const getClientSideURL = (): string => {
    if (typeof window !== 'undefined') {
      const protocol = window.location.protocol
      const domain = window.location.hostname
      const port = window.location.port
      return `${protocol}//${domain}${port ? `:${port}` : ''}`
    }

    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    }

    return process.env.NEXT_PUBLIC_SERVER_URL || ''
  }

  return <PayloadLivePreview refresh={router.refresh} serverURL={getClientSideURL()} />
}
