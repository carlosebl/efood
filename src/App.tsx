import Hero from './components/Hero'
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
    </>
  )
}

export default App
