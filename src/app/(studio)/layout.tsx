import { Open_Sans } from 'next/font/google'

export const runtime = 'edge'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] })

type Props = {
  children: React.ReactNode,
}

export default function RootLayout({
  children,
}: Props) {
  return (
  <html lang="en">
    <body className={openSans.className}>
      {children}
    </body>
  </html>
  )
}
