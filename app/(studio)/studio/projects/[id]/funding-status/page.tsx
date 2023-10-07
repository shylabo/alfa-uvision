import { projects } from '@/mock';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import ProjectSidebar from '../components/ProjectSidebar';

interface FundingStatusPageProps {
  params: { id: string };
}

const FundingStatusPage: FC<FundingStatusPageProps> = ({ params: { id } }) => {
  const project = projects.find((project) => project.id === +id);
  if (!project) return notFound();

  return (
    <>
      <div className="h-full">
        <ProjectSidebar project={project} />
      </div>
      <main className="w-full h-full overflow-y-auto p-4">
        <div>Funding Status</div>
      </main>
    </>
  );
};

export default FundingStatusPage;
