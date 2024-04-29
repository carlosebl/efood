import { PratoCard } from './styles'
import pizza from '../../assets/images/pizza.png'

const Prato = () => (
  <PratoCard>
    <img src={pizza} alt="pizza" />
    <h3>Pizza Marguerita</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button>Adicionar ao carrinho</button>
  </PratoCard>
)

export default Prato
