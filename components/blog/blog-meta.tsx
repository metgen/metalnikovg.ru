import type readingTime from 'reading-time'
import { Twemoji } from '~/components/ui/twemoji'
import { SITE_METADATA } from '~/data/site-metadata'
import { formatDate } from 'pliny/utils/formatDate'

type BlogMetaProps = {
  date: string
  lastmod?: string
  slug: string
  readingTime: ReturnType<typeof readingTime>
}

export function BlogMeta({ date, lastmod, slug, readingTime }: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Опубликовано</dt>
      <dd className="flex flex-wrap items-center gap-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 md:gap-3 md:text-base">
        <time dateTime={date} className="flex items-center justify-center">
          <Twemoji emoji="calendar" size="base" />
          <span>Опубликовано</span>
          <span className="ml-1.5 md:ml-2">{formatDate(date, SITE_METADATA.locale)}</span>
        </time>
        {lastmod && (
          <>
            <span className="text-gray-400">/</span>
            <time dateTime={date} className="flex items-center justify-center">
              <Twemoji emoji="pencil" size="base" />
              <span>Обновлено</span>
              <span className="ml-1.5 md:ml-2">{formatDate(lastmod, SITE_METADATA.locale)}</span>
            </time>
          </>
        )}
        <span className="text-gray-400">/</span>
        <div className="flex items-center">
          <Twemoji emoji="three-o-clock" size="base" />
          <span className="ml-1.5 md:ml-2">{Math.ceil(readingTime.minutes)} мин. чтения</span>
        </div>
        {/* <span className="mx-2 text-gray-500">|</span>
      <div className="flex items-center">
        <Twemoji emoji="eye" size="base" />
        <ViewCounter className="ml-1.5 md:ml-2" slug={slug} />
      </div> */}
      </dd>
    </dl>
  )
}
