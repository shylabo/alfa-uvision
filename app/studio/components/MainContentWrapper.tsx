interface MainWrapperProps {
  children: React.ReactNode
}
const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return <main className="pt-14 pl-60">{children}</main>
}

export default MainWrapper
