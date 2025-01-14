'use client'
import type { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Snippet } from '~/.contentlayer/generated'
// import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
// import { Twemoji } from '~/components/ui/twemoji'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
// import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'
import PopularTags from '~/components/home-page/populartags'
import BlogHome from '~/icons/blog.svg'
import Snowfall from 'react-snowfall'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div">
      <div className="relative">
        <Snowfall
          snowflakeCount={60}
          style={{
            zIndex: -1,
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />
        <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
          <div className="space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
            <Greeting />
            <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
              <Intro />
              <TypedBios />
              <div className="mb-6 mt-4 md:mb-8">
                <p>
                  Даже если эта информация уже доступна на других ресурсах, то возможно мой способ
                  ее формулирования и подачи может оказаться вам ближе и вы сможете найти здесь
                  что-то полезное для себя.
                </p>
              </div>
              {/* <BlogLinks /> */}
            </div>
          </div>
          <div className="hidden pl-4 pt-8 xl:block">
            {/* <ProfileCard /> */}
            <BlogHome className="mx-auto aspect-square w-[100px] max-w-[80vw] md:w-[300px]" />
          </div>
        </div>
      </div>
      <PopularTags />
      <LatestPosts posts={posts} snippets={snippets} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
