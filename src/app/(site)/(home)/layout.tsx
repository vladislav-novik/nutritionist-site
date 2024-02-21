import Header from '@/components/containers/layout/header'
import Footer from '@/components/containers/layout/footer'

import { generateMetadataForPage } from '@/utils/metadata'
import { Metadata } from 'next/types';

// export async function generateMetadata({ params }: Props ): Promise<Metadata> {
//   const { lang } = params

//   return await generateMetadataForPage('home', lang);
// }

export async function generateMetadata(): Promise<Metadata> {
  // const { lang } = params

  return await generateMetadataForPage('home', 'ru');
}

type Props = {
  children: React.ReactNode,
  // params: {
  //   lang: string,
  // }
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header lang={'ru'}></Header>
      {children}
      <Footer></Footer>
    </>
  );
}