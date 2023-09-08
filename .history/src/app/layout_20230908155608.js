import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NODEWAVE - Solusi Teknologi Untuk Kita Semua',
  description: 'Solusi Teknologi Untuk Kita Semua',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" /> {/* Pastikan path sesuai dengan lokasi favicon Anda */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
