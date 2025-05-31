import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams, origin } = new URL(request.url)

    const redirect = searchParams.get('redirect') || '/'
    const preview = searchParams.get('preview') || ''
    const token = searchParams.get('token') || ''

    const finalURL = new URL(`${redirect}?preview=${preview}&token=${token}`, origin)

    return NextResponse.redirect(finalURL)
  } catch (error) {
    console.error('[API Preview] Error:', error)
    return new NextResponse('Erreur lors de l’activation du mode preview.', { status: 500 })
  }
}
