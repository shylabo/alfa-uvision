import StudioSidebar from '../../components/StudioSidebar';
import ProjectPageContent from '../[id]/edit/components/ProjectPageContent';

const NewProjectPage = () => {
  return (
    <>
      <div className="h-full">
        <StudioSidebar />
      </div>
      <main className="w-full h-full overflow-y-auto px-4">
        <ProjectPageContent />
      </main>
    </>
  );
};

export default NewProjectPage;
