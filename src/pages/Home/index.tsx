import Hero from '../../components/Hero'
import ListaRestaurantes from '../../containers/ListaRestaurantes'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Hero />
    <Container>
      <ListaRestaurantes />
    </Container>
  </>
)

export default Home
