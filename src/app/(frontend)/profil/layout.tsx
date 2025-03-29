import './style.scss'
import React from 'react'

export default async function ProfilRootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <div className="profil_layout">{children}</div>
}
