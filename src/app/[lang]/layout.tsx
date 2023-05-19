import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'


const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] })

type Props = {
  children: React.ReactNode,
  params: {
    lang: string,
  }
}

// export async function generateStaticParams() {
//   return [{ lang: 'ru' }, { lang: 'by' }, { lang: 'en' }];
// }

export default function Layout({
  children,
  params,
}: Props) {
  return (
    <html lang={params.lang}>
      <body className={openSans.className}>
        <Header lang={params.lang}></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
