import { Inter } from 'next/font/google'
import { Providers } from "@/app/providers";
import '@/app/styles/globals.css'
import IMAGES from '@/public';
import { siteConfig } from "@/config/siteconfig";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prospera Hospitality',
  description: 'Prospera Hospitality Admin',
  icons: {
    icon: siteConfig.favicon,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
