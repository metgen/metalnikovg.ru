export const SITE_METADATA = {
  title: `metalnikovg.ru - Цифрофой сад | Блог`,
  author: 'Метальников Геннадий',
  headerTitle: `metalnikovg.ru`,
  description: 'Заметки по IT тематике',
  language: 'ru-ru',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.metalnikovg.ru',
  siteRepo: 'https://github.com/metgen/metalnikovg.ru',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/avatar.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/site_screen.png`,
  email: 'contact@metalnikovg.ru',
  github: 'https://github.com/metgen',
  x: 'https://x.com/gennadiy_m',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/@gennadiy_m',
  linkedin: 'https://www.linkedin.com/in/gennadiy-metalnikov',
  threads: 'https://www.threads.net/',
  instagram: 'https://instagram.com/gennadiy.m',
  vk: `https://vk.com/gennadii_m`,
  telegram: 'https://t.me/gennadiy_m',
  locale: 'ru-RU',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://cloud.umami.is/share/Ah7bGmJVDqtCROFG/www.metalnikovg.ru',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
