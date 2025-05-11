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
  title: 'Viktor Sivek | Developer Portfolio',
  description:
    'Viktor Sivek - Developer passionate about full-stack projects, data analytics, and AI/ML. Building robust applications, automating workflows, and creating AI-driven solutions with Python and Typescript.',
  keywords: [
    'Viktor Sivek',
    'developer',
    'full-stack',
    'data analytics',
    'AI',
    'ML',
    'Python',
    'Typescript',
    'portfolio',
    'web development',
    'software engineer',
  ],
  authors: [{ name: 'Viktor Sivek' }],
  creator: 'Viktor Sivek',
  publisher: 'Viktor Sivek',
  icons: {
    icon: '/viktor_favicon.svg',
  },
  openGraph: {
    title: 'Viktor Sivek | Developer Portfolio',
    description:
      'Viktor Sivek - Developer passionate about full-stack projects, data analytics, and AI/ML. Building robust applications, automating workflows, and creating AI-driven solutions with Python and Typescript.',
    url: 'https://viktorsivek.github.io', // Assuming this is your domain, please correct if not
    siteName: 'Viktor Sivek Portfolio',
    // images: [ // You can add an image for social media sharing here
    //   {
    //     url: 'https://viktorsivek.github.io/og-image.png', // Example path
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viktor Sivek | Developer Portfolio',
    description:
      'Viktor Sivek - Developer passionate about full-stack projects, data analytics, and AI/ML. Building robust applications, automating workflows, and creating AI-driven solutions with Python and Typescript.',
    // siteId: '@yourTwitterHandle', // Add your Twitter handle if you have one
    // creator: '@yourTwitterHandle',
    // images: ['https://viktorsivek.github.io/twitter-image.png'], // Example path
  },
  robots: {
    // Added basic robots meta tag, will also create robots.txt
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
