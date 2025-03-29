import './style.scss'
import React from 'react'

export default async function PageRootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return <div className="page_layout">{children}</div>
}
