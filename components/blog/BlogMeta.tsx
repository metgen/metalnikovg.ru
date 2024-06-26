import { formatDate } from 'pliny/utils/formatDate';

import type { BlogMetaProps } from '@/types/index';

import { Twemoji } from '../Twemoji';
// import ViewCounter from './ViewCounter';
import siteMetadata from '@/data/siteMetadata';

// Add slug, to enable view count
const BlogMeta = ({ date, readingTime }: BlogMetaProps) => {
  return (
    <dd className="flex-column flex gap-1 font-semibold text-gray-500 dark:text-gray-400">
      <time dateTime={date} className="flex items-center">
        <Twemoji emoji="calendar" size="1" />
        <span className="ml-1 md:ml-2">{formatDate(date, siteMetadata.locale)}</span>
      </time>
      <span className="mx-2">{` • `}</span>
      <div className="flex items-center">
        <Twemoji emoji="hourglass-not-done" size="1" />
        <span className="ml-1.5 md:ml-2">{Math.ceil(readingTime.minutes)} мин. чтения</span>
      </div>
      {/* Uncomment to enable view count posts
      <span className="mx-2">{` • `}</span>
      <div className="flex items-center">
        <Twemoji emoji="eye" size="" />
        <ViewCounter className="ml-1.5 md:ml-2" slug={slug} />
      </div>
      */}
    </dd>
  );
};

export default BlogMeta;
