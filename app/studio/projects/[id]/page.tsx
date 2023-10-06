import { projects } from '@/mock'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import ProjectPageContent from './components/ProjectPageContent'
import Sidebar from './components/Sidebar'

interface ProjectDetailPageProps {
  params: { id: string }
}

const ProjectDetailPage: FC<ProjectDetailPageProps> = ({ params: { id } }) => {
  const project = projects.find((project) => project.id === +id)
  if (!project) return notFound()

  return (
    <>
      <div className="h-full">
        <Sidebar project={project} />
      </div>
      <main className="w-full h-full overflow-y-auto px-4">
        <ProjectPageContent defaultProject={project} />
      </main>
    </>
  )
}

export default ProjectDetailPage
