import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Geist_Mono } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Aiden Bai',
  description: '',
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
        {process.env.NODE_ENV === 'development' && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body
        className={`${geistMono.className} antialiased tracking-tighter`}
      >
        {children}
      </body>
    </html>
  );
}
