import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  children: React.ReactNode,
  params: {
    lang: string,
  }
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