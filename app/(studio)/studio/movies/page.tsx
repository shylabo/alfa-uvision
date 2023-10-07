import Sidebar from '../components/StudioSidebar';

const MoviesPage = () => {
  return (
    <>
      <div className="h-full">
        <Sidebar />
      </div>
      <main className="w-full h-full overflow-y-auto p-4">
        <div>====================</div>
        FUTURE IMPLEMENTS
        <div>====================</div>
        <div className="space-y-3">
          <div>
            <h1 className="font-bold">What is this page for?</h1>
            <p>- This is the page where creators can upload and publish their movies.(Similar to youtube studio)</p>
          </div>

          <div>
            <h1 className="font-bold">Rough requirements:</h1>
            <p>- Movie can be associated with one project.</p>
            <p>- (Good to have feature) Movie entity can be created from movie data in a project.</p>
          </div>

          <div>
            <h1 className="font-bold">Who can watch the movies? (Business logic should be determined)</h1>
            <p>Movies can be watched </p>
            <ol>
              <li>1. only by those who have NFTs of the project.</li>
              <li>2. earlier by those who have NFTs of the project, but everyone watch it.</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
};

export default MoviesPage;
