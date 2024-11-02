'use client'

import { IconBrandTelegram, IconBrandVk } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { VKShareButton, TelegramShareButton } from 'react-share'

type SocialButtonsProps = {
  postUrl: string
  title: string
  className?: string
}

export function SocialShare({ postUrl, title, className }: SocialButtonsProps) {
  return (
    <div className={clsx('flex items-center gap-2 text-white', className)}>
      <span className="hidden text-gray-500 lg:inline">Поделиться:</span>
      <TelegramShareButton
        url={postUrl}
        title={title}
        className="flex items-center overflow-hidden rounded-full !bg-linkedin !px-2 !py-2 text-white hover:opacity-90"
      >
        <IconBrandTelegram strokeWidth={1.5} size={16} />
      </TelegramShareButton>
      <VKShareButton
        url={postUrl}
        className="flex items-center overflow-hidden rounded-full !bg-facebook !px-2 !py-2 text-white hover:opacity-90"
      >
        <IconBrandVk strokeWidth={1.5} size={16} />
      </VKShareButton>
    </div>
  )
}
