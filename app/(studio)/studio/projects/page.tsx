import StudioSidebar from '../components/StudioSidebar';
import Table from './components/Table';

const ProjectsPage = () => {
  return (
    <>
      <div className="h-full">
        <StudioSidebar />
      </div>
      <main className="w-full h-full overflow-y-auto py-4">
        <div>
          <Table />
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
