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
          Привет! <Twemoji emoji="waving hand" /> Меня зовут <b className="font-medium">Геннадий.</b>
        </li>
        <li>
          Я работаю в сефре IT. <Twemoji emoji="desktop computer" />
        </li>
        <li>
          Мне нравится учиться и получать новые знания в этой области. <Twemoji emoji="books" />
        </li>
        <li>
          Веду личную базу знаний в Obsidian <Twemoji emoji="gem" />
        </li>
        <li>
          Делаю полезные заметки для себя, и публикую их здесь. <Twemoji emoji="scroll" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
