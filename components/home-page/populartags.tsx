import {map} from 'lodash';

import popularTags from "data/populartags"
import { Link } from '~/components/ui/link'

import TagIcon from '~/components/ui/tagicon';

const PopularTags = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-1 py-1 md:space-y-1">
        <h1 className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <span className="mr-2 md:mr-3">Основные темы</span>
        </h1>
        <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">Заметки по тэгам</p>
      </div>

      <div className="popular-tags grid grid-cols-3 gap-4 py-6 xl:grid-cols-6">
        {map(popularTags, (popularTag) => {
          const { slug, iconType, href, title } = popularTag;

          const className = `${slug} flex w-[128px] justify-center space-x-2 rounded-lg p-3`;

          return (
            <Link key={slug} href={href} className={className}>
              <TagIcon type={iconType} className="h-6 w-6" />
              <div className="my-auto text-white">{title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularTags;