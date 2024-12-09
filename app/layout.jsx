import Nav from "@/app/common/Nav";
import Script from "next/script";
import { Do_Hyeon } from 'next/font/google';

export const metadata = {
  title: '장주리 이력서',
  description: '이력서',
}

const font = Do_Hyeon({
    subsets: ['latin'], // 또는 preload: false
    weight: '400'
});

export default function RootLayout({ children }) {
  return (
        <html lang="ko">
        <head>
            <Script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" strategy="lazyOnload"></Script>
            <link rel="stylesheet" href="/assets/css/template.css"/>
        </head>
        <body className={font.className}>
        <Nav/>
        <div className="container-fluid p-0">
            {children}
        </div>
        </body>
        </html>
  )
}
