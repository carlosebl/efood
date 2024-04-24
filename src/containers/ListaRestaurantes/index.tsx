import Restaurante from '../../components/Restaurante'
import { Lista, ListaContainer } from './styles'

const ListaRestaurantes = () => (
  <ListaContainer>
    <Lista>
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
      <Restaurante />
    </Lista>
  </ListaContainer>
)
export default ListaRestaurantes
