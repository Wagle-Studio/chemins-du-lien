'use client'

import React from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function ProfilPage() {
  const { user } = useAuth()

  return <h1 className="with-bar-left">{user?.email}</h1>
}
