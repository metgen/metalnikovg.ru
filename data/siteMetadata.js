// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: 'Личный блог',
  author: 'Метальников Геннадий',
  fullName: 'Метальников Геннадий',
  headerTitle: 'Metalnikov Gennadiy',
  description: 'Записи по IT тематике',
  language: 'ru-ru',
  theme: 'system',
  siteUrl: 'https://metalnikovg.ru',
  analyticsURL: 'https://cloud.umami.is/share/Ah7bGmJVDqtCROFG/www.metalnikovg.ru',
  siteRepo: 'https://github.com/metgen/metalnikovg.ru',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/personal_blog.png',
  email: 'metalnikov.gennadiy@gmail.com',
  github: 'https://github.com/metgen',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/gennadiy_m',
  youtube: 'https://youtube.com/@gennadiy_m',
  instagram: `https://instagram.com/gennadiy.m`,
  vk: `https://vk.com/gennadii_m`,
  locale: 'ru-RU',
  socialAccounts: {
    github: 'metgen',
    instagram: `gennadiy.m`,
    vk: `gennadii_m`,
  },
  analytics: {
    umamiWebsiteId: '4b376fb9-e064-4d60-a92d-fbec36e34dd1',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'ru',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
