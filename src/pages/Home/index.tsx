import Hero from '../../components/Hero'
import Footer from '../../containers/Footer'
import ListaRestaurantes from '../../containers/ListaRestaurantes'
import { Container } from '../../styles'

export type Restaurantes = {
  id: number
  titulo: string
  destacado?: true
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

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
