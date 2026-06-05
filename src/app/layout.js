import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'
import LayoutWrapper from '@/components/LayoutWrapper'
import LanguageInitializer from '@/components/LanguageInitializer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
  return (
    <LayoutWrapper>
      <LanguageProvider>
        <LanguageInitializer />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </LanguageProvider>
    </LayoutWrapper>
  );
}