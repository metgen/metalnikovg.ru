import { genPageMetadata } from 'app/seo'
import { ProjectCard } from '~/components/cards/project'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { PROJECTS } from '~/data/projects'
import { fetchRepoData } from '~/utils/github'

export let metadata = genPageMetadata({ title: 'Проекты' })

export default async function Projects() {
  await Promise.all(
    PROJECTS.map(async (p) => {
      if (p.repo) {
        p.repo = await fetchRepoData({ repo: p.repo as string })
      }
    })
  )
  let workProjects = PROJECTS.filter(({ type }) => type === 'work')

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Проекты"
        description="Мои проекты"
        className="border-b border-gray-200 dark:border-gray-700"
      />
      <div className="py-5 md:py-10">
        <div className="space-y-16">
          {workProjects.map((pro, idx) => (
            <ProjectCard key={pro.title} project={pro} reversed={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </Container>
  )
}
