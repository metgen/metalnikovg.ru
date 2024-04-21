import { BrandIconType } from '@/components/BrandIcon';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
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
    href: '/tags/bash',
    iconType: 'Bash',
    slug: 'bash',
    title: 'Bash',
  },
  {
    href: '/tags/powershell',
    iconType: 'Powershell',
    slug: 'powershell',
    title: 'Powershell',
  },
  {
    href: '/tags/windows',
    iconType: 'Windows',
    slug: 'windows',
    title: 'Windows',
  },
  {
    href: '/tags/android',
    iconType: 'Android',
    slug: 'android',
    title: 'Android',
  },
  {
    href: '/tags/network',
    iconType: 'Network',
    slug: 'network',
    title: 'Network',
  },
];

export default popularTags;
