import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { generateMetadataForPage } from '@/utils/metadata'
import { Metadata } from 'next/types';

export async function generateMetadata({ params }: Props ): Promise<Metadata> {
  const { lang } = params

  return await generateMetadataForPage('home', lang);
}

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