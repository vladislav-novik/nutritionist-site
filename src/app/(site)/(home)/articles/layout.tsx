// import { generateMetadataForPage } from "@/utils/metadata";
// import { Metadata } from "next/types";

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { lang } = params

//   return await generateMetadataForPage('articles', lang);
// }

type Props = {
  children: React.ReactNode,
  params: {
    lang: string,
  }
}

export default function Layout({children}: Props) {
  return (
    <main className="w-full mb-16 py-8 md:py-16 md:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  )
}