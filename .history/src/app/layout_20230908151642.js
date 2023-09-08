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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
