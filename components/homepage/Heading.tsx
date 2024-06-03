// import siteMetadata from '@/data/siteMetadata'; //

// import { Twemoji } from '@/components/Twemoji'; //

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      <p>Приветствую вас в своем блоге.</p>
      <p>Ниже расскажу немного о себе и о целях этого блога.</p>
      <span className="hidden">Санкт-Петербург, Россия</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]"></span>
    </h1>
  );
};

export default Heading;
