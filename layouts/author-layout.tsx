import type { Author } from 'contentlayer/generated'
import { Link } from '~/components/ui/link'
import type { ReactNode } from 'react'
import { SocialAccounts } from '~/components/author/social-accounts'
import { Container } from '~/components/ui/container'
import { Image } from '~/components/ui/image'
import { PageHeader } from '~/components/ui/page-header'
import { Twemoji } from '~/components/ui/twemoji'
import { ProfileCard } from '~/components/cards/profile'
import { SITE_METADATA } from '~/data/site-metadata'
import {
  IconBrandX,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
} from '@tabler/icons-react'

interface Props {
  children?: ReactNode
  content: Omit<Author, '_id' | '_raw' | 'body'>
}

export function AuthorLayout({ children, content }: Props) {
  const { name, email, discription } = content
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="О сайте"
        description="Коротко о себе и цели этого сайта"
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-8 md:grid md:grid-cols-3">
        <div className="pr-4">
          <ProfileCard />
          {/* <div className="pb-2 pt-4 lg:pt-12 text-2xl font-bold leading-8 tracking-tight">Социальные сети:</div>
          <SocialAccounts />
          <Image
            src={'/static/images/avatar.jpg'}
            alt="avatar"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
          <div className="text-gray-500 dark:text-gray-400">{discription}</div>
          <div className="mt-2 flex gap-3">
              <Link href={`mailto:${email}`}>
                <IconMail size={24} strokeWidth={2} />
              </Link>
              <Link href={SITE_METADATA.github} target="_blank">
                <IconBrandGithub size={24} strokeWidth={2} />
              </Link>
              <Link href={SITE_METADATA.instagram} target="_blank">
                <IconBrandInstagram size={24} strokeWidth={2} />
              </Link>
              <Link href={SITE_METADATA.x} target="_blank">
                <IconBrandX size={24} strokeWidth={2} />
              </Link>
              <Link href={SITE_METADATA.telegram}>
                <IconBrandTelegram size={24} strokeWidth={2} />
              </import { SocialAccounts } from '~/components/author/social-accounts'Link>
              <Link href={SITE_METADATA.vk}>
                <IconBrandVk size={24} strokeWidth={2} />
              </Link>
            </div> */}
        </div>
        <div className="md:col-span-2 md:pl-12 xl:pl-16">
          <div className="prose prose-lg dark:prose-invert">
            <div>
              <h2 className="mt-0">
                Привет! <Twemoji emoji="waving-hand" />
              </h2>
              <p>
                Меня зовут <strong>Геннадий</strong>, и это мой цифровой сад{' '}
              </p>
              <p>
                Работаю в сефре IT. Мне нравится учиться и получать новые знания в этой области.
                Веду личную базу знаний в Obsidian, делаю полезные заметки для себя, и публикую их
                здесь.
              </p>
              Интересные для меня направления:
              <li>Администрирование: Linux, Windows, Mac OS</li>
              <li>Автоматизация: bash, powershell скриптинг</li>
              <li>Оркестрация/контейнеризация: Kubernetes, Portainer, Docker</li>
              <li>Мониторинг: Prometheus, Zabbix, Grafana</li>
              <li>Системы виртуализации: Proxmox, KVM, Hyper-V</li>
              <li>Сети: TCP/IP, DHCP, DNS, VPN, BGP, PROXY</li>
            </div>
            <div>
              <h2>Цель этого сайта</h2>
              <p>
                Этот сайт создан для публикации некоторых заметок из моей личной базы знаний в
                Obsidian и представляют собой своего рода "Digital garden"
              </p>
              <p>Здесь я буду делиться своими заметками на различные темы связанные с IT.</p>
              Даже если эта информация уже доступна на других ресурсах, то возможно мой способ ее
              формулирования и подачи может оказаться вам ближе и вы сможете найти здесь что-то
              полезное для себя.
              <p>В галерее выкладывыаю свои мобильные фотографии.</p>
              Цифровые сады — это как личные вики, и этот не исключение. Эти заметки для меня, чтобы
              помочь мне сохранить информацию и выступают в качестве удобного справочного материала,
              а также развить новые идеи. Все остальное — просто бонус.
              <p>
                Буду признателен за ваши комментарии... <Twemoji emoji="clinking-beer-mugs" />.
              </p>
            </div>
            <div>
              <h2>Концепция сайта</h2>
              <p>
                Это статический сайт с генератором страниц на современном техническом стеке. Он
                имеет следующие преимущества:
              </p>

              <li>
                Публикации в формате <strong>MARKDOWN</strong>. (Позволяют легко публиковать заметки
                из <strong>Obsidian</strong>)
              </li>

              <li>Отсутствие базы данных (упрощает хранение и обслуживание)</li>

              <li>
                Исходный код и содержимое сайта хранятся в репозитории <strong>GitHub</strong>.
              </li>

              <li>
                Пайплайн CI/CD при помощи GitHub Actions (автоматический деплой из репозитория после
                каждого <code>git push</code>)
              </li>

              <li>
                Сайт имеет почти идеальную оценку произвольности <strong>Lighthouse</strong>.
              </li>

              <img src="/static/images/ligthouse_report.png"></img>

              <li>Имеется светлая и темная тема, а так же удобный мобильный вид.</li>
              <li>Хорошая SEO оптимизация.</li>
              <li>
                Для отображение блоков кода и подсветки синтаксиса используется{' '}
                <a href="https://github.com/timlrx/rehype-prism-plus">rehype-prism-plus</a>
              </li>
              <li>
                Для комментариев используется <a href="https://github.com/giscus/giscus">giscus</a>
              </li>
            </div>
            <div>
              <h2>Технический стек</h2>
              <p>
                Сайт использует в качестве хостинга{' '}
                <a href="https://vercel.com/" target="_blank">
                  Vercel
                </a>
                , создан с помощью{' '}
                <a href="https://nextjs.org/" target="_blank">
                  Next.js
                </a>{' '}
                ,{' '}
                <a href="https://tailwindcss.com/" target="_blank">
                  Tailwind CSS
                </a>{' '}
                и шаблона{' '}
                <a href="https://tailwind-nextjs-starter-blog.vercel.app/">
                  Tailwind Nextjs Starter Blog
                </a>
                .
              </p>
              <p>
                Некоторые идеи были позаимствованы у{' '}
                <a href="https://github.com/timlrx" target="_blank">
                  Timothy Lin
                </a>{' '}
                и других контрибьютеров.
              </p>
              <p>Несколько мажорых изменений по сравнению с исодным репозиторием:</p>
              <ul>
                <li>
                  <Twemoji emoji="atom-symbol" /> Обновление до <strong>React v18</strong>,{' '}
                  <strong>Next v14</strong>
                </li>
                <li>
                  <Twemoji emoji="bar-chart" /> Мониторинг сайта с помощью web аналитики{' '}
                  <a href="https://umami.is/" target="_blank">
                    Umami
                  </a>{' '}
                </li>
                <li>
                  <Twemoji emoji="eyes" /> Внесены небольшие изменения в тему, иконки и структуру
                  сайта.
                </li>
                <li>
                  <Twemoji emoji="man-technologist" /> Этот веб-сайт использует дизайн и код из
                  репозитория{' '}
                  <a href="https://github.com/timlrx/tailwind-nextjs-starter-blog" target="_blank">
                    tailwind-nextjs-starter-blog
                  </a>{' '}
                  и включает шаблон tailwind-nextjs-starter-blog, версии 2.0.
                </li>
                {/* <li>
                  <Twemoji emoji="inbox-tray" /> Bumping up <code>mdx-bundler</code>,{' '}
                  <code>rehype</code>/<code>remark</code> plugins and dependencies to the latest
                  version
                </li> */}
              </ul>
              <p>
                Мой{' '}
                <a href="https://github.com/metgen/metalnikovg.ru" target="_blank">
                  Github репозиторий
                </a>{' '}
                для этого сайта.
              </p>
            </div>
            <div>
              <h2>Ресурсы</h2>
              <p>
                Большое количество изображений взято из{' '}
                <a href="https://unsplash.com/" target="_blank">
                  Unsplash
                </a>
                , иконок из{' '}
                <a href="https://www.svgrepo.com/" target="_blank">
                  SVG Repo
                </a>
                , а иллюстраций из{' '}
                <a href="https://storyset.com/" target="_blank">
                  Storyset
                </a>
                .
              </p>
              <p>
                Спасибо за бесплатные ресурсы <Twemoji emoji="folded-hands" />.
              </p>
            </div>
            <div>
              <h2>Контакты</h2>
              <SocialAccounts />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
