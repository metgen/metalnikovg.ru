import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'main',
    title: 'Персональный веб-сайт',
    imgSrc: '/static/images/projects/digital_garden.png',
    repo: 'metalnikovg.ru',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Umami'],
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