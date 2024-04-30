import { Link } from 'react-router-dom'
import { BotaoItem, ItemCard } from './styles'
import pizza from '../../assets/images/pizza.png'

const Item = () => (
  <ItemCard>
    <img src={pizza} alt="pizza" />
    <h3>Pizza Marguerita</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <BotaoItem>
      <Link to="/modal">Adicionar ao carrinho</Link>
    </BotaoItem>
  </ItemCard>
)

export default Item
