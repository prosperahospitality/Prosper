import React from 'react';
import { Providers } from "@/app/providers";
import '@/app/styles/globals.css'

export const metadata = {
  title: 'Invoice',
  description: 'Prospera Invoice',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
