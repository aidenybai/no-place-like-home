import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Aiden Bai',
  description: '',
  icons: {
    icon: '/aiden-logo.webp',
    apple: '/aiden-logo.webp',
  },
  openGraph: {
    title: 'Aiden Bai',
    images: [
      {
        url: '/aiden-logo.webp',
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Aiden Bai',
    images: ['/aiden-logo.webp'],
  },
};

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="//unpkg.com/react-grab/dist/index.global.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
            <Script
              src="//unpkg.com/@react-grab/visual-edit/dist/client.global.js"
              strategy="lazyOnload"
            />
      </head>
      <body className={`${geistMono.className} antialiased tracking-tighter`}>
        {children}
      </body>
    </html>
  );
}
