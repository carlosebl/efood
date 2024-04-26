import Destaque from '../../components/Destaque'
import Restaurante from '../../components/Restaurante'
import { Lista, ListaContainer } from './styles'

const ListaRestaurantes = () => (
  <ListaContainer>
    <Lista>
      <Destaque />
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
    </Lista>
  </ListaContainer>
)
export default ListaRestaurantes
