import { clsx } from 'clsx'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={SITE_METADATA.headerTitle} className="flex items-center">
      <Image
        src="/static/images/logo.svg"
        alt={SITE_METADATA.headerTitle}
        width={100}
        height={100}
        className="h-10 w-10 rounded-xl"
        loading="eager"
      />
      <div className="duration-00 group ml-2 text-xl font-bold transition">
        MetalnikovG.ru
        <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%] dark:bg-white"></span>
      </div>
    </Link>
  )
}
