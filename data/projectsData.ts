import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'main',
    title: 'GitBook',
    description: 'Моя личная база знаний',
    imgSrc: '/static/images/projects/gitbook.png',
    url: 'https://gitbook.metalnikovg.ru',
    builtWith: ['GitBook', 'GitHub', 'Markdown'],
  },
  {
    type: 'self',
    title: 'Персональный веб-сайт',
    imgSrc: '/static/images/projects/personal_blog.png',
    repo: 'metalnikovg.ru',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
];

export default projectsData;
