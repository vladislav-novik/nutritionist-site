import Header from '@/components/Header'
import Footer from '@/components/Footer'

type MetadataProps = {
  
}

type Props = MetadataProps & {
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