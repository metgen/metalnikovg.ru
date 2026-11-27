import Script from 'next/script.js'

interface UmamiAnalyticsProps {
  websiteId?: string
  src?: string
}

export function UmamiAnalytics({ websiteId, src = '/stats/script.js' }: UmamiAnalyticsProps) {
  // Don't load analytics during local development: it would pollute the stats
  // and the `/stats` proxy is only guaranteed to work on Vercel.
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  if (websiteId) {
    return <Script async defer data-website-id={websiteId} src={src} />
  }
  return null
}
