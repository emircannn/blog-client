import { ThemeProvider } from '@/components/providers/themeProviders'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/layouts/Header'
const font = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '800', '900'] })
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '@/components/layouts/Footer'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: 'ZİNCİRKIRAN',
    template: `%s | ZİNCİRKIRAN`
  },
  description: 'Zincirkıran Hareketi: Milliyetçi-Toplumcu bir entelijansiya hareketi olarak başkaldırıyı savunur, Türk milliyetçiliğini kurtuluş reçetesi olarak sunar.',
  creator: 'Emircan Yaşar',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="tr" suppressHydrationWarning>
      <body className={cn(font.className, "bg-white dark:bg-darkerColor text-darkColor dark:text-white overflow-x-hidden")}>
        <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem={true}
        storageKey='theme'
        >
          <Header/>
          <Toaster />
            {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
