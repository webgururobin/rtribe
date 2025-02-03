import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from '../components/Footer'
import { Toaster } from '@/components/ui/sonner'

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-general-sans",
})

const nippo = localFont({
  src: [
    {
      path: "./fonts/Nippo-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Nippo-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Nippo-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-nippo",
})

export const metadata: Metadata = {
  title: "RTribe",
  description: "PREMIUM ATHLETIC WEAR",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={`${generalSans.variable} ${nippo.variable} antialiased bg-[#1E1E1E]`}>
        <div className='flex flex-col min-h-screen'>
          <div className="flex-1">
            {children}
          </div>
          <div>
            <Footer />
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  )
}
