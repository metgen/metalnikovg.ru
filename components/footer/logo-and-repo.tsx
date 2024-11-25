'use client'

import { Star, CheckCheck, Circle, X } from 'lucide-react'
import useSWR from 'swr'
// import { Logo } from '~/components/header/logo'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'
import type { GithubRepository } from '~/types/data'
import { fetcher } from '~/utils/misc'
import { IconBrandGithub } from '@tabler/icons-react'

export function LogoAndRepo() {
  let siteRepo = SITE_METADATA.siteRepo.replace('https://github.com/', '')
  let { data: repo } = useSWR<GithubRepository>(`/api/github?repo=${siteRepo}`, fetcher)

  return (
    <div className="flex items-center">
      <Link href={SITE_METADATA.siteRepo} rel="noreferrer">
        <GrowingUnderline data-umami-event="footer-view-source" className="flex items-center gap-2">
          <IconBrandGithub size={24} strokeWidth={2} />
          <span className="font-medium">{SITE_METADATA.headerTitle}</span>
        </GrowingUnderline>
      </Link>
      {repo?.lastCommit && (
        <>
          <span className="mx-2">-</span>
          <Link
            href={repo.lastCommit.url}
            className="mr-1.5 text-indigo-700 dark:text-indigo-400"
            title={repo.lastCommit.message}
          >
            <GrowingUnderline data-umami-event="repo-last-commit">
              #{repo.lastCommit.abbreviatedOid}
            </GrowingUnderline>
          </Link>
          <CommitStatus status={repo.lastCommit.status.state} />
        </>
      )}
      <span className="mx-2">-</span>
      <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
        (<Star className="mr-1 h-4 w-4" />
        {repo ? repo.stargazerCount : '---'})
      </span>
    </div>
  )
}

function CommitStatus({ status }: { status: string }) {
  switch (status) {
    case 'SUCCESS':
      return <CheckCheck size={16} strokeWidth={2} className="text-green-700" />
    case 'PENDING':
      return (
        <Circle size={12} strokeWidth={1.5} fill="green" className="animate-pulse text-[green]" />
      )
    case 'FAILURE':
      return <X size={16} strokeWidth={2} className="text-red-700" />
    default:
      return null
  }
}
