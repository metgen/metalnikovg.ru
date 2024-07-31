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
          В свободное время изучаю различные IT технологии <Twemoji emoji="desktop computer" />
        </li>
        <li>
          Нравится учиться и получать новые знания в данной области <Twemoji emoji="books" />
        </li>
        <li>
          Пишу инструкции, полезные заметки, интересные статьи <Twemoji emoji="scroll" />
        </li>
        <li>
          Увлекаюсь видеоиграми <Twemoji emoji="video-game" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
