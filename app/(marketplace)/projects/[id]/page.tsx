import { projects } from '@/mock';
import { notFound } from 'next/navigation';
import ProjectPageContent from './ProjectPageContent';

interface ProjectPageProps {
  params: { id: string };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params: { id } }) => {
  const project = projects.find((project) => project.id === +id);
  if (!project) return notFound();

  return <ProjectPageContent project={project} />;
};

export default ProjectPage;
