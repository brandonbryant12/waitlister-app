import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waitlister',
  description: 'Generated feedback on your ideas before you build',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <link rel="icon" href="/public/favicon.ico" /> 
      </Head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}
