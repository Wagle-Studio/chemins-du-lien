import { cookies } from 'next/headers'
import { AuthProvider } from '@/auth/context'
import type { User } from '@/payload-types'

export async function AuthWrapper({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value
  let user: User | null = null

  if (token) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/me`, {
        headers: {
          Cookie: `payload-token=${token}`,
        },
        cache: 'no-store',
      })

      if (res.ok) {
        const json = await res.json()
        user = json.user
      }
    } catch (err) {
      console.error('[AuthWrapper] Failed to fetch user:', err)
      user = null
    }
  }

  return <AuthProvider initialUser={user}>{children}</AuthProvider>
}
