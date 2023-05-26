import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

type Props = {
  children: React.ReactNode,
  params: {
    lang: string,
  }
}

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.BASE_URL}`
  }
  // verification: 
}

export default function Layout({ children, params }: Props) {
  return (
    <>
      <Header lang={params.lang}></Header>
      {children}
      <Footer></Footer>
    </>
  );
}