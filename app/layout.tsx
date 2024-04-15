import "@/styles/globals.css"

import { Metadata, Viewport } from "next"

import { BASE_URL } from "@/config/const"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: `${BASE_URL}/favicon.ico`,
    shortcut: `${BASE_URL}/favicon-16x16.png`,
    apple: `${BASE_URL}/apple-touch-icon.png`,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="id" suppressHydrationWarning className="scroll-smooth">
        <head />
        <body
          className={cn(
            "content-grid relative auto-rows-max bg-white-dark1 font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            <div className="full-width content-grid min-h-dvh">{children}</div>
            <Footer />

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
