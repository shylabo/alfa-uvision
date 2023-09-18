interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto h-screen grid grid-cols-1">{children}</div>
}

export default Container
