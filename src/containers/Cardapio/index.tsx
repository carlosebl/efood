import Prato from '../../components/Prato'
import { Container } from '../../styles'
import { CardapioContainer, CardapioLista } from './styles'

const Cardapio = () => (
  <Container>
    <CardapioContainer>
      <CardapioLista>
        <Prato />
        <Prato />
        <Prato />
        <Prato />
        <Prato />
        <Prato />
      </CardapioLista>
    </CardapioContainer>
  </Container>
)

export default Cardapio
