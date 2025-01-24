import type { Blog, Snippet } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { ReactNode } from 'react'
import { BlogMeta } from '~/components/blog/blog-meta'
import { TagsList } from '~/components/blog/tags'
import { Comments } from '~/components/blog/comments'
import { PostTitle } from '~/components/blog/post-title'
import { ScrollButtons } from '~/components/blog/scroll-buttons'
import { SocialShare } from '~/components/blog/social-share'
import { Container } from '~/components/ui/container'
import { SITE_METADATA } from '~/data/site-metadata'
import { EditOnGithub } from '~/components/blog/edit-on-github'
import { GradientDivider } from '~/components/ui/gradient-divider'

interface PostSimpleProps {
  content: CoreContent<Blog | Snippet>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export function PostSimple({ content, children }: PostSimpleProps) {
  let { slug, date, lastmod, title, type, tags, readingTime, filePath } = content
  let postUrl = `${SITE_METADATA.siteUrl}/${type.toLowerCase()}/${slug}`

  return (
    <Container className="pt-4 lg:pt-12">
      <ScrollButtons />
      <article className="space-y-6 pt-6 lg:space-y-12">
        <div className="space-y-4">
          <TagsList tags={tags} />
          <PostTitle>{title}</PostTitle>
          <dl>
            <div>
              <dt className="sr-only">Опубликовано</dt>
              <BlogMeta date={date} lastmod={lastmod} slug={slug} readingTime={readingTime} />
            </div>
          </dl>
        </div>
        <GradientDivider />
        <div className="prose prose-lg max-w-none pt-4 dark:prose-invert">{children}</div>
        <GradientDivider className="mb-2 mt-1" />
        <div className="space-y-8 pt-6">
          <div className="flex justify-between gap-4">
            <div className="flex items-center gap-2">
              <EditOnGithub filePath={filePath} />
            </div>
            <SocialShare postUrl={postUrl} title={title} />
          </div>
          <Comments />
        </div>
      </article>
    </Container>
  )
}
