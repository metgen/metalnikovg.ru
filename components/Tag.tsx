import Link from 'next/link';
import { kebabCase } from 'pliny/utils/kebabCase';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 text-sm font-medium uppercase text-primary hover:text-teal-600 dark:hover:text-teal-400"
    >
      <span data-umami-event="tag">#{text.split(' ').join('-')}</span>
    </Link>
  );
};

export default Tag;
