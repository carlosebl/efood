import { Overlay } from '../../styles'
import Perfil from '../Perfil'
import overlay from '../../assets/images/overlay.png'
import BarraLateral from '../../containers/BarraLateral'
import ItemCarrinho from '../../components/ItemCarrinho'
import { Link } from 'react-router-dom'
import { BotaoCarrinho, CarrinhoInfo } from './styles'

const Carrinho = () => (
  <>
    <Overlay src={overlay} />
    <BarraLateral>
      <div>
        <div>
          <ItemCarrinho />
          <ItemCarrinho />
          <ItemCarrinho />
        </div>
        <CarrinhoInfo>
          <h4>Valor total</h4>
          <h4>R$ 182,70</h4>
        </CarrinhoInfo>
        <BotaoCarrinho>
          <Link to="/entrega">Continuar com a entrega</Link>
        </BotaoCarrinho>
      </div>
    </BarraLateral>
    <Perfil />
  </>
)

export default Carrinho
