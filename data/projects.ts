import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Персональный веб-сайт',
    description:
      'Цифровой сад',
    imgSrc: '/static/images/projects/site_screen.png',
    repo: 'metgen/metalnikovg.ru',
    // url: 'https://www.metalnikovg.ru/', //
    builtWith: ['NextJS', 'Tailwind_CSS', 'Typescript', 'Umami'],
  },
  {
    type: 'work',
    title: 'EXIF-галерея',
    description:
      'Галлерея',
    imgSrc: '/static/images/projects/gallery.png',
    repo: 'metgen/exif-gallery',
    builtWith: ['Vercel', 'GitHub', 'Typescript', 'Cloudflare'],
  },
  {
    type: 'work',
    title: 'MKT-monitoring',
    description:
      'Мониторинг роутеров Mikrotik',
    imgSrc: '/static/images/projects/mkt-monitoring.png',
    repo: 'metgen/mkt_monitoring',
    builtWith: ['Grafana', 'Prometheus', 'Nginx', 'Docker'],
  },

]
