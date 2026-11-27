import { genPageMetadata } from 'app/seo'
import { ProjectCard } from '~/components/cards/project'
import { Container } from '~/components/ui/container'
import { PageHeader } from '~/components/ui/page-header'
import { PROJECTS } from '~/data/projects'
import { fetchRepoData } from '~/utils/github'

export let metadata = genPageMetadata({ title: 'Проекты' })

export default async function Projects() {
  // Don't mutate the shared PROJECTS array: in dev the page can be rendered
  // several times, and on the second render `repo` would already be an object,
  // causing `repo.split is not a function` inside fetchRepoData.
  let projects = await Promise.all(
    PROJECTS.map(async (project) => {
      if (typeof project.repo !== 'string') {
        return project
      }
      return { ...project, repo: await fetchRepoData({ repo: project.repo }) }
    })
  )
  let workProjects = projects.filter(({ type }) => type === 'work')

  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="Проекты"
        description="Open-source проекты"
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
