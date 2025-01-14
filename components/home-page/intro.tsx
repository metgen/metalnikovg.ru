import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      <p>
        Этот сайт создан для публикации некоторых заметок на тему IT из моего хранилища Obsidian.
        Здесь вы можете найти заметки по:
      </p>
      <span className="hidden">Санкт-Петербург, Россия</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]"></span>
    </h1>
  )
}
