import Header from './components/Header'
import Sidebar from './components/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
