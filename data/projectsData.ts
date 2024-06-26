import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'main',
    title: 'Персональный веб-сайт',
    imgSrc: '/static/images/projects/personal_blog.png',
    repo: 'metalnikovg.ru',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Umami'],
  },
  {
    type: 'main',
    title: 'GitBook',
    description: 'Личная база знаний',
    imgSrc: '/static/images/projects/gitbook.png',
    url: 'https://gitbook.metalnikovg.ru',
    builtWith: ['GitBook', 'GitHub', 'Markdown'],
  },
  {
    type: 'main',
    title: 'EXIF-галерея',
    imgSrc: '/static/images/projects/gallery.png',
    repo: 'exif-gallery',
    builtWith: ['Vercel', 'Vercel Postgres', 'GitHub', 'Typescript', 'Cloudflare R2'],
  },
  {
    type: 'self',
    title: 'MKT-monitoring',
    imgSrc: '/static/images/projects/mkt-monitoring.png',
    repo: 'mkt_monitoring',
    builtWith: ['Grafana', 'Prometheus', 'Blackbox', 'Nginx', 'Docker'],
  },
];

export default projectsData;