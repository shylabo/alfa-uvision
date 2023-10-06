import { FC, ReactNode } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

interface StudioLayoutProps {
  children: ReactNode
}

const StudioLayout: FC<StudioLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-64px)]">{children}</div>
    </div>
  )
}

export default StudioLayout
