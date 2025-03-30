import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const redirect = searchParams.get('redirect') || '/'

    const res = NextResponse.redirect(new URL(redirect, request.url))

    const draft = await draftMode()
    draft.enable()

    return res
  } catch (error) {
    console.error('[API Preview] Error:', error)
    return new NextResponse('Erreur lors de l’activation du mode preview.', { status: 500 })
  }
}
