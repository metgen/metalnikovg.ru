import { Twemoji } from '~/components/ui/twemoji'

export function Intro() {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      <p>
        Этот сайт создан для публикации некоторых заметок из моей личной базы знаний в Obsidian и представляют собой
        своего рода "Digital garden"
      </p>
      <span className="hidden">Санкт-Петербург, Россия</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]"></span>
    </h1>
  )
}
