import Item from '../../components/Item'
import { Container } from '../../styles'
import { CardapioContainer, CardapioLista } from './styles'

const Cardapio = () => (
  <Container>
    <CardapioContainer>
      <CardapioLista>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </CardapioLista>
    </CardapioContainer>
  </Container>
)

export default Cardapio
