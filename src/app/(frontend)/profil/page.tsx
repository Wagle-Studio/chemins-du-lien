'use client'

import React from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function ProfilPage() {
  const { user } = useAuth()

  return <h1 className="with_bar_left">{user?.email}</h1>
}
