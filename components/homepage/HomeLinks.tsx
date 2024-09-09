import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';

const HomeLinks = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col space-y-1.5">
        <Link href="/blog" className="hover:underline">
          <Twemoji emoji="memo" />
          <span data-umami-event="home-link-blog" className="ml-1.5">
            Все заметки
          </span>
        </Link>
        <Link href="/tags" className="hover:underline">
          <Twemoji emoji="label" />
          <span data-umami-event="home-link-projects" className="ml-1.5">
            Все тэги
          </span>
        </Link>
      </div>
      <div className="flex flex-col space-y-1.5">
        <Link href="/about" className="hover:underline">
          <Twemoji emoji="face-with-monocle" />
          <span data-umami-event="home-link-about" className="ml-1.5">
            Больше информации о сайте
          </span>
        </Link>
        <Link href="https://gallery.metalnikovg.ru/" className="hover:underline">
          <Twemoji emoji="sunrise" />
          <span data-umami-event="home-link-resume" className="ml-1.5">
            Галлерея
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeLinks;
