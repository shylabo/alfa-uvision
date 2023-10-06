import Sidebar from '../../components/Sidebar'
import ProjectPageContent from '../[id]/components/ProjectPageContent'

const NewProjectPage = () => {
  return (
    <>
      <div className="h-full">
        <Sidebar />
      </div>
      <main className="w-full h-full overflow-y-auto px-4">
        <ProjectPageContent />
      </main>
    </>
  )
}

export default NewProjectPage
