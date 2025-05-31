import { NextResponse } from 'next/server'
import payload from 'payload'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const createdMessage = await payload.create({
      collection: 'contact-messages',
      data: {
        ...data,
        status: 'pending',
        sentAt: new Date(),
      },
    })

    return NextResponse.json(createdMessage, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ status: 500 })
  }
}
