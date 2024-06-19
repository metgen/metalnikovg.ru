import { TagIconType } from '@/components/TagIcon';

type PopularTag = {
  href: string;
  iconType: TagIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/linux',
    iconType: 'Linux',
    slug: 'linux',
    title: 'Linux',
  },
  {
    href: '/tags/windows',
    iconType: 'Windows',
    slug: 'windows',
    title: 'Windows',
  },
  {
    href: '/tags/docker',
    iconType: 'Docker',
    slug: 'docker',
    title: 'Docker',
  },
  {
    href: '/tags/mikrotik',
    iconType: 'Mikrotik',
    slug: 'mikrotik',
    title: 'Mikrotik',
  },
  {
    href: '/tags/homelab',
    iconType: 'Homelab',
    slug: 'homelab',
    title: 'Homelab',
  },
  {
    href: '/tags/network',
    iconType: 'Network',
    slug: 'network',
    title: 'Network',
  },
];

export default popularTags;
