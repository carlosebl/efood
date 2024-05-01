import {
  DetalhesCarrinho,
  ImagemCarrinho,
  ItemCarrinhoContainer,
  Lixeira
} from './styles'
import pizza from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'
import { Link } from 'react-router-dom'

const ItemCarrinho = () => (
  <ItemCarrinhoContainer>
    <ImagemCarrinho src={pizza} alt="pizza" />
    <DetalhesCarrinho>
      <h3>Pizza Marguerita</h3>
      <p>R$ 60,90</p>
    </DetalhesCarrinho>
    <div>
      <Link to="/modal">
        <Lixeira src={lixeira} alt="" />
      </Link>
    </div>
  </ItemCarrinhoContainer>
)

export default ItemCarrinho
