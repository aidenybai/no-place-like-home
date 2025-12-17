import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { STIX_Two_Text } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Aiden Bai',
  description: '',
};

const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
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
      <body className={`${stixTwoText.className} antialiased tracking-[-0.02em]`}>
        {children}
      </body>
    </html>
  );
}
