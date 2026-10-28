import type { Metadata } from 'next'
import 'convenient-store-header-library/index.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Convenient Store',
  description:
    'A demo application composing the Convenient Store Header and SearchInput libraries.',
  authors: [{ name: 'Alex Le' }]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}