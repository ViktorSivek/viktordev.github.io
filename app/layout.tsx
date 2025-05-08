import type { Metadata } from 'next'
import { Poppins, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'], // Poppins Bold
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'], // Roboto Mono Regular
})

export const metadata: Metadata = {
  title: 'Viktor | Portfolio',
  description: 'Viktor | Portfolio',
  icons: {
    icon: '/viktor_favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${robotoMono.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
