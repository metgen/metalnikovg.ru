import { SITE_METADATA } from '~/data/site-metadata'
import { Fragment } from 'react'
import { Twemoji } from '~/components/ui/twemoji'
import {
  IconBriefcase,
  //IconSchool,
  IconMapPin,
  // IconBrandVk,
  IconBrandGithub,
  // IconBrandInstagram,
  IconMail,
  IconBrandLinkedin,
} from '@tabler/icons-react';

function getAccountHandle(url = '') {
  let lastPart = url.split('/').pop()
  if (lastPart) {
    return lastPart
  }
  return url
}

const SOCIALS = [
  {
    platform: 'github',
    handle: getAccountHandle(SITE_METADATA.github),
    href: SITE_METADATA.github,
    Icon: () => <IconBrandGithub size={20} strokeWidth={1.5} />,
    umamiEvent: 'profile-card-github',
  },
  {
    platform: 'linkedin',
    handle: getAccountHandle(SITE_METADATA.linkedin),
    href: SITE_METADATA.linkedin,
    Icon: () => <IconBrandLinkedin size={20} strokeWidth={1.5} />,
    umamiEvent: 'profile-card-linkedin',
  },
]

export function ProfileCardInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Метальников Геннадий</h3>
      <h5 className="py-2 text-gray-500 dark:text-gray-400">Информация и контакты:</h5>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <IconBriefcase strokeWidth={1.5} size={20} />
          <p className="flex items-center px-2">
            IT - специалист
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <IconMapPin strokeWidth={1.5} size={20} />
          <p className="px-2">
            Санкт-Петербург, Россия
            <span className="absolute ml-1 inline-flex pt-px">
            <Twemoji emoji="russia-flag" />
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <IconMail strokeWidth={1.5} size={20} />
          <a className="px-2" href={`mailto:${SITE_METADATA.email}`}>
            {SITE_METADATA.email}
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
          {SOCIALS.map(({ platform, handle, href, Icon, umamiEvent }, idx) => (
            <Fragment key={platform}>
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="flex items-center underline-offset-4 hover:underline"
                data-umami-event={umamiEvent}
              >
                <Icon />
                <span className="ml-px text-gray-500">/</span>
                <span className="ml-0.5">{handle}</span>
              </a>
              {idx !== SOCIALS.length - 1 && (
                <span className="text-gray-400 dark:text-gray-500">|</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
