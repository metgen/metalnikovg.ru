'use client'

import { Clock, Map } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'

const TIME_IS = 'https://time.is/Saint_Petersburg'
const MY_TIMEZONE = 'Europe/Moscow'
const MY_TIMEZONE_OFFSET = 3 * -60 // UTC+3

function getTime() {
  let date = new Date()
  let visitorTimezoneOffset = date.getTimezoneOffset()
  let hoursDiff = (visitorTimezoneOffset - MY_TIMEZONE_OFFSET) / 60
  let diff =
    hoursDiff === 0
      ? 'то же время'
      : hoursDiff > 0
        ? `плюс ${hoursDiff} часа`
        : `минус ${hoursDiff * -1} часа`

  let time = new Intl.DateTimeFormat('ru-RU', {
    timeZone: MY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)

  return { time, diff }
}

export function AddressAndTime() {
  // Time and timezone difference depend on the visitor's clock, so they must be
  // computed on the client only. Rendering them during SSR causes a hydration
  // mismatch (React error #418).
  let [timeInfo, setTimeInfo] = useState<ReturnType<typeof getTime> | null>(null)

  useEffect(() => {
    let updateTime = () => setTimeInfo(getTime())
    updateTime()
    let timer = window.setInterval(updateTime, 30_000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="space-y-2 py-1.5 text-gray-800 dark:text-gray-200">
      <div className="flex items-center gap-2">
        <Map className="h-5 w-5" />
        <span className="font-medium">
          Санкт-Петербург <Twemoji emoji="russia-flag" className="!h-4.5" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        <Link href={TIME_IS}>
          <GrowingUnderline className="font-medium" data-umami-event="footer-time">
            {timeInfo ? (
              <>
                {timeInfo.time}{' '}
                <span className="text-gray-500 dark:text-gray-400">({timeInfo.diff})</span>
              </>
            ) : (
              <span className="text-gray-500 dark:text-gray-400">--:--</span>
            )}
          </GrowingUnderline>
        </Link>
      </div>
    </div>
  )
}
