import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TV Stream Plus - Assista onde quiser',
  description: 'Assistia aos seus canais favoritos ao vivo, com qualidade HD e sem travar!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">TV Stream Plus</h1>
              <a
                href="#pricing"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300"
              >
                Assinar
              </a>
            </div>
          </header>
          {children}
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}