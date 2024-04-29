import Hero from '../../components/Hero'
import Footer from '../../containers/Footer'
import ListaRestaurantes from '../../containers/ListaRestaurantes'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Hero />
    <Container>
      <ListaRestaurantes />
    </Container>
    <Footer />
  </>
)

export default Home
