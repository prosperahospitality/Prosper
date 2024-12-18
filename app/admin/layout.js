import { Inter } from 'next/font/google'
import { Providers } from "@/app/providers";
import '@/app/styles/globals.css'
import { Metadata } from 'next';
import CompanyTopBar from '@/app/admin/companytop-bar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prospera Admin',
  description: 'Prospera Admin',
  // icons: "/faviconpms.ico",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className='bg-white text-black'>
        <main>
        <Providers>
     <CompanyTopBar />
          {children}
        </Providers>
      </main>
      </body>
    </html>
  )
}
