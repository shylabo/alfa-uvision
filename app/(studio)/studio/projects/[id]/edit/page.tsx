import { projects } from '@/mock';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import ProjectSidebar from '../components/ProjectSidebar';
import ProjectPageContent from './components/ProjectPageContent';

interface ProjectDetailPageProps {
  params: { id: string };
}

const ProjectDetailPage: FC<ProjectDetailPageProps> = ({ params: { id } }) => {
  const project = projects.find((project) => project.id === +id);
  if (!project) return notFound();

  return (
    <>
      <div className="h-full">
        <ProjectSidebar project={project} />
      </div>
      <main className="w-full h-full overflow-y-auto p-4">
        <ProjectPageContent defaultProject={project} />
      </main>
    </>
  );
};

export default ProjectDetailPage;
