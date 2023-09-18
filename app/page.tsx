import Container from '@/components/Container'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="pt-16 h-full w-full bg-secondary">Projects align here</div>
      </Container>
    </>
  )
}
