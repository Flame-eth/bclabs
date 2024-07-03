import '@/styles/globals.css';
import { Roboto as FontSans } from 'next/font/google';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-sans',
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-black font-sans antialiased no-scrollbar',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
