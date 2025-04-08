import { useState, useCallback } from 'react'

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: HeadersInit
  body?: any // TODO: update typing
  credentials?: RequestCredentials
}

type FetchResult<T> = {
  data: T | null
  error: string | null
}

export default function useFetcher<T = unknown>() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetcher = useCallback(
    async (url: string, options: FetchOptions = {}): Promise<FetchResult<T>> => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url, {
          method: options.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options.headers,
          },
          credentials: options.credentials || 'same-origin',
          body: options.body ? JSON.stringify(options.body) : undefined,
        })

        if (!response.ok) {
          const json = await response.json()
          const msg = json?.errors?.[0]?.message || 'Erreur inconnue'
          setError(msg)
          return { data: null, error: msg }
        }

        const data = await response.json()
        return { data, error: null }
      } catch (err: any) {
        const msg = err?.message || 'Erreur réseau'
        setError(msg)
        return { data: null, error: msg }
      } finally {
        setIsLoading(false)
      }
    },
    [],
  )

  return {
    isLoading,
    error,
    fetcher,
  }
}
