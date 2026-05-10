import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const headingFont = Inter({ 
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-heading',
})

const bodyFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
})

const monoFont = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Design Team - Il Tuo Reparto Creativo Autonomo',
  description: 'Asset Premium in 5 Minuti. Non serve disegnare, basta dirigere.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="dark">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}
