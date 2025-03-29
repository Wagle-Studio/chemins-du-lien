import './style.scss'
import React from 'react'

export default async function AuthRootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <div className="auth_layout">{children}</div>
}
