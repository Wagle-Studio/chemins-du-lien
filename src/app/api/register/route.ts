import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, firstname, lastname, password } = body

  const createRes = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, firstname, lastname, password }),
  })

  if (!createRes.ok) {
    const error = await createRes.json()
    return NextResponse.json(error, { status: createRes.status })
  }

  const loginRes = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, firstname, lastname, password }),
    credentials: 'include',
  })

  if (!loginRes.ok) {
    const error = await createRes.json()
    return NextResponse.json(error, { status: loginRes.status })
  }

  const loginData = await loginRes.json()

  const response = NextResponse.json(loginData, { status: loginRes.status })

  const token = loginRes.headers.getSetCookie()?.find((c) => c.startsWith('payload-token'))

  if (token) {
    response.headers.set('Set-Cookie', token)
  }

  return response
}
