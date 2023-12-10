import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import Naviga from '@/components/Naviga'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/your-path-to-uicons/css/uicons-rounded-regular.css" rel="stylesheet" />
        <link href="/your-path-to-uicons/css/uicons-rounded-bold.css" rel="stylesheet" />
        <link href="/your-path-to-uicons/css/uicons-rounded-solid.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Naviga />
        {children}
        <Footer />
      </body>
    </html>
  )
}