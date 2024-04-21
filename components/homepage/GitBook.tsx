import Link from '@/components/Link';

const GitBook = () => {
  return (
    <div className="my-2 grid items-start gap-8">
      <div className="group relative">
        <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <Link href="https://gitbook.metalnikovg.ru/">
          <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
            <span className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 -rotate-6 text-teal-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="pr-6 text-gray-900 dark:text-gray-100">Личная база знаний</span>
            </span>
            <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
              Перейти на GitBook&nbsp;&rarr;
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default GitBook;
