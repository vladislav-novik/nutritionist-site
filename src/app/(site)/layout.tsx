import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] })

type Props = {
  children: React.ReactNode,
}

export default function RootLayout({
  children
}: Props) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
