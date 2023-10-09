import { projects } from '@/mock';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { id: string };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params: { id } }) => {
  const project = projects.find((project) => project.id === +id);
  if (!project) return notFound();

  return (
    <div>
      <div>{project.name}</div>
    </div>
  );
};

export default ProjectPage;
