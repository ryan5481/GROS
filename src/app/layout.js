import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/navigation/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Reliance',
  description: 'Global Reliance Services Pvt. Ltd.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
