import Sidebar from '../components/Sidebar'
import Table from './components/Table'

const ProjectsPage = () => {
  return (
    <>
      <div className="h-full">
        <Sidebar />
      </div>
      <main className="w-full h-full overflow-y-auto p-4">
        <div>
          <Table />
        </div>
      </main>
    </>
  )
}

export default ProjectsPage
