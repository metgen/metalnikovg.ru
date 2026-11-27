import '@fontsource-variable/nunito'
import '@fontsource-variable/nunito/wght-italic.css'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource-variable/playpen-sans'
import 'css/tailwind.css'
import 'css/twemoji.css'
import 'css/prism.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'remark-github-blockquote-alert/alert.css'

import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'
import type { SearchConfig } from 'pliny/search'
import { SearchProvider } from 'pliny/search'
import { UmamiAnalytics } from '~/components/analytics/umami'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { TiltedGridBackground } from '~/components/ui/tilted-grid-background'
import { SITE_METADATA } from '~/data/site-metadata'
import { ThemeProviders } from './theme-providers'

const basePath = process.env.BASE_PATH || ''
const faviconsPath = `${basePath}/static/favicons`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: './',
    siteName: SITE_METADATA.title,
    images: [SITE_METADATA.socialBanner],
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${SITE_METADATA.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: SITE_METADATA.title,
    card: 'summary_large_image',
    images: [SITE_METADATA.socialBanner],
  },
  icons: {
    icon: [
      { url: `${faviconsPath}/favicon.ico`, sizes: '48x48' },
      { url: `${faviconsPath}/favicon.svg`, type: 'image/svg+xml', sizes: 'any' },
      { url: `${faviconsPath}/favicon-96x96.png`, type: 'image/png', sizes: '96x96' },
    ],
    apple: { url: `${faviconsPath}/apple-touch-icon.png`, sizes: '180x180' },
  },
  manifest: `${faviconsPath}/site.webmanifest`,
  appleWebApp: {
    title: 'metalnikovg.ru',
    capable: false,
  },
  verification: {
    yandex: 'cfc8dbe278439e74',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={SITE_METADATA.language}
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={clsx([
          'antialiased',
          'relative min-h-screen pl-[calc(100vw-100%)]',
          'flex flex-col',
          'bg-white text-gray-900',
          'dark:bg-dark dark:text-gray-100',
        ])}
        suppressHydrationWarning
      >
        <TiltedGridBackground className="inset-x-0 top-0 z-[-1] h-[50vh]" />
        <ThemeProviders>
          <UmamiAnalytics websiteId={SITE_METADATA.analytics.umamiAnalytics.websiteId} />
          <SearchProvider searchConfig={SITE_METADATA.search as SearchConfig}>
            <Header />
            <main className="mb-auto grow">{children}</main>
          </SearchProvider>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
