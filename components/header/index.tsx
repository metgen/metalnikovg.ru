'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Container } from '~/components/ui/container'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { HEADER_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import { ConsoleLogo } from './console-logo'
import { MobileNav } from './mobile-nav'
import { MoreLinks } from './more-links'
import { SearchButton } from './search'
import { ThemeSwitcher } from './theme-switcher'

let logged = false
const ASCII_ART = [
  '                 __             ___               __                       ____      ',
  " /'\\_/`\\        /\\ \\__         /\\_ \\           __/\\ \\                     /\\  _`\\    ",
  "/\\      \\     __\\ \\ ,_\\    __  \\//\\ \\     ___ /\\_\\ \\ \\/'\\     ___   __  __\\ \\ \\L\\_\\  ",
  "\\ \\ \\__\\ \\  /'__`\\ \\ \\/  /'__`\\  \\ \\ \\  /' _ `\\/\\ \\ \\ , <    / __`\\/\\ \\/\\ \\\\ \\ \\L_L  ",
  ' \\ \\ \\_/\\ \\/\\  __/\\ \\ \\_/\\ \\L\\.\\_ \\_\\ \\_/\\ \\/\\ \\ \\ \\ \\ \\\\`\\ /\\ \\L\\ \\ \\ \\_/ |\\ \\ \\/, \\',
  '  \\ \\_\\\\ \\_\\ \\____\\\\ \\__\\ \\__/.\\_\\/\\____\\ \\_\\ \\_\\ \\_\\ \\_\\ \\_\\ \\____/\\ \\___/  \\ \\____/',
  '   \\/_/ \\/_/\\/____/ \\/__/\\/__/\\/_/\\/____/\\/_/\\/_/\\/_/\\/_/\\/_/\\/___/  \\/__/    \\/___/',
].join('\n')

function logASCIItext() {
  if (logged) return
  console.info(ASCII_ART)
  console.log('🧑‍💻 View source:', SITE_METADATA.siteRepo)
  logged = true
}

export function Header() {
  let pathname = usePathname()
  useEffect(logASCIItext, [])

  return (
    <Container
      as="header"
      className={clsx(
        'bg-white/75 py-2 backdrop-blur dark:bg-dark/75',
        'shadow-sm saturate-100 md:rounded-2xl',
        SITE_METADATA.stickyNav && 'sticky top-2 z-50 lg:top-3'
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <ConsoleLogo />
        <div className="flex items-center gap-4">
          <div className="hidden gap-1.5 sm:flex">
            {HEADER_NAV_LINKS.map(({ title, href }) => {
              let isActive = pathname.startsWith(href)
              return (
                <Link key={title} href={href} className="px-3 py-1 font-medium">
                  <GrowingUnderline
                    className={clsx(isActive && 'bg-[length:100%_50%]')}
                    data-umami-event={`nav-${href.replace('/', '')}`}
                  >
                    {title}
                  </GrowingUnderline>
                </Link>
              )
            })}
            <MoreLinks />
          </div>
          <div
            data-orientation="vertical"
            role="separator"
            className="hidden h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600 md:block"
          />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <SearchButton />
            <MobileNav />
          </div>
        </div>
      </div>
    </Container>
  )
}
