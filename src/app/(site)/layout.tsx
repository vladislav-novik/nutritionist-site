import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

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
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=G-KKTXDLKGEV"
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-KKTXDLKGEV');
  `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
