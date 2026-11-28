'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Link } from '~/components/ui/link'

/**
 * «Консольный» логотип: показывает только раздел (первый сегмент пути),
 * без имени конечной страницы.
 *   /            -> ~/metalnikovg.ru
 *   /blog        -> ~/metalnikovg.ru/blog
 *   /blog/slug   -> ~/metalnikovg.ru/blog
 *   /tags/tag    -> ~/metalnikovg.ru/tags
 */
export function ConsoleLogo({ className }: { className?: string }) {
  let pathname = usePathname()
  let section = pathname.split('/').filter(Boolean)[0] || ''
  let path = section ? `/${section}` : ''

  return (
    <Link
      href="/"
      aria-label="metalnikovg.ru — на главную"
      className={clsx(
        'flex min-w-0 items-center font-mono text-sm font-medium md:text-base',
        className
      )}
    >
      <span className="shrink-0 text-lime-500 dark:text-lime-400">~</span>
      <span className="truncate text-gray-800 dark:text-gray-200">/metalnikovg.ru{path}</span>
      <span className="shrink-0 animate-cursor-blink text-lime-500 dark:text-lime-400">▍</span>
    </Link>
  )
}
