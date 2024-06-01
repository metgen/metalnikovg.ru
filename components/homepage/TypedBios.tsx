import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          Меня зовут <b className="font-medium">Геннадий</b>
        </li>
        <li>
          Я живу в <b className="font-medium">Санкт-Петербурге</b>
        </li>
        <li>В свободное время изучаю различные IT технологии</li>
        <li>
          Сейчас занимаюсь изучением <b className="font-medium">OS Linux</b> <Twemoji emoji="penguin" />
        </li>
        <li>
          Играю в видеоигры <Twemoji emoji="video-game" />
        </li>
        <li>
          Катаюсь на велосипеде <Twemoji emoji="bicycle" />
        </li>
        <li>
          Немного путешествую <Twemoji emoji="palm-tree" />
        </li>
        <li>
          Увлекаюсь мобильной фотографией <Twemoji emoji="frame-with-picture" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
