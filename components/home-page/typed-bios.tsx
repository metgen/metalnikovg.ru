'use client'

import { clsx } from 'clsx'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div
      className={clsx([
        'flex min-h-8 items-center gap-0.5',
        [
          '[&_.typed-cursor]:inline-block',
          '[&_.typed-cursor]:w-2',
          '[&_.typed-cursor]:h-5.5',
          '[&_.typed-cursor]:text-transparent',
          '[&_.typed-cursor]:bg-slate-800',
          'dark:[&_.typed-cursor]:bg-slate-100',
        ],
      ])}
    >
      <ul id="bios" className="hidden">
        <li>
          Привет! <Twemoji emoji="waving-hand" size="base" /> Меня зовут{' '}
          <b className="font-medium">Геннадий.</b>
        </li>
        <li>
          Я работаю в сефре IT. <Twemoji emoji="desktop-computer" size="base" />
        </li>
        <li>
          Мне нравится учиться и получать новые знания в этой области. <Twemoji emoji="books" />
        </li>
        <li>
          Веду личную базу знаний в Obsidian <Twemoji emoji="gem-stone" />
        </li>
        <li>
          Делаю полезные заметки для себя, и публикую их здесь. <Twemoji emoji="scroll" />
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
