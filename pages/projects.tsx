import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';

import ProjectCard from '@/components/ProjectCard';
import { PageSEO } from '@/components/SEO';

export default function Projects() {
  const { title, headerTitle } = siteMetadata;

  const description = 'Мои open-source проекты';

  const mainProjects = projectsData.filter(({ type }) => type === 'main');
  const sideProjects = projectsData.filter(({ type }) => type === 'self');

  return (
    <>
      <PageSEO title={`Проекты - ${headerTitle} - ${title}`} description={description} />

      <div className="dark:divide-gray divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Проекты
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Основные
          </h3>
          <div className="-m-4 flex flex-wrap">
            {mainProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
            Побочные
          </h3>
          <div className="-m-4 flex flex-wrap">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
