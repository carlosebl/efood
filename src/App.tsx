import Hero from './components/Hero'
import Footer from './containers/Footer'
import ListaRestaurantes from './containers/ListaRestaurantes'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <Container>
        <ListaRestaurantes />
      </Container>
      <Footer />
    </>
  )
}

export default App
