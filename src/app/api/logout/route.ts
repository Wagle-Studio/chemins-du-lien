import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  const cookieStore = await cookies()
  const token = cookieStore.get('payload-token')?.value

  if (token) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/logout`, {
        method: 'POST',
        headers: {
          Cookie: `payload-token=${token}`,
        },
      })
    } catch (err) {
      console.error('Failed to notify Payload on logout:', err)
    }
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('payload-token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0),
  })

  return response
}
