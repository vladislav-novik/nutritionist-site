import "./globals.css";
import { PT_Sans, PT_Sans_Caption, Pacifico } from "next/font/google";
import Script from "next/script";
import classnames from "classnames";

const heading = PT_Sans({
  subsets: ["cyrillic"],
  weight: "400",
  style: ["normal"],
  variable: "--font-heading",
  display: "swap",
});
const content = PT_Sans_Caption({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-content",
  display: "swap",
});
const cursive = Pacifico({
  subsets: ["cyrillic"],
  weight: "400",
  style: ["normal"],
  variable: "--font-cursive",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props): React.JSX.Element {
  return (
    <html
      lang="ru"
      className={`${heading.variable} ${content.variable} ${cursive.variable}`}
    >
      <body className={classnames(content.className, 'bg-main')}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-KKTXDLKGEV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
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
      </body>
    </html>
  );
}
