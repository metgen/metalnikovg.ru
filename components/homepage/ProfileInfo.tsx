import siteMetadata from '@/data/siteMetadata';
import Twemoji from '@/components/Twemoji';
import {
  IconBriefcase,
  IconSchool,
  IconMapPin,
  IconBrandVk,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandGmail,
} from '@tabler/icons-react';

const ProfileCardInfo = () => {
  return (
    <div className="p-3">
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">Метальников Геннадий</h3>
      <h5 className="text-gray-700 dark:text-gray-400">Информация и контакты:</h5>
      <div className="mb-2 mt-2 space-y-3">
        <div className="flex items-center">
          <IconBriefcase size={20} strokeWidth={2} />
          <p className="px-2">
            Tech Support @{' '}
            <a className="hover:underline" target="_blank" href="https://ozon.tech/" rel="noreferrer">
              OzonTech
            </a>
          </p>
        </div>
        {/* <div className="flex items-center">
          <IconSchool name="study" size={20} strokeWidth={2} />
          <p className="px-2">
            Инженер-гидролог @{' '}
            <a className="hover:underline" target="_blank" href="https://rshu.ru/" rel="noreferrer">
              РГГМУ
            </a>
          </p>
        </div> */}
        <div className="flex items-center">
          <IconMapPin name="map-pin" size={20} strokeWidth={2} />
          <p className="px-2">
            Санкт-Петербург, Россия <Twemoji emoji="russia-flag" />
          </p>
        </div>
        <div className="flex items-center">
          <IconBrandGmail size={20} strokeWidth={2} />
          <p className="px-2">
            <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <a
            target="_blank"
            href={siteMetadata.github}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-github"
          >
            <IconBrandGithub size={20} strokeWidth={2} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.github}</span>
          </a>

          <span className="text-gray-400 dark:text-gray-500">|</span>
          <a
            target="_blank"
            href={siteMetadata.instagram}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-instagram"
          >
            <IconBrandInstagram size={20} strokeWidth={2} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.instagram}</span>
          </a>

          <span className="text-gray-400 dark:text-gray-500">|</span>
          <a
            target="_blank"
            href={siteMetadata.vk}
            rel="noreferrer"
            className="flex items-center text-sm hover:underline"
            data-umami-event="profile-card-vk"
          >
            <IconBrandVk size={20} strokeWidth={2} />
            <span className="ml-px text-gray-500">/</span>
            <span className="ml-0.5">{siteMetadata.socialAccounts.vk}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardInfo;
