import { Overlay } from '../../styles'
import overlay from '../../assets/images/overlay.png'
import BarraLateral from '../../containers/BarraLateral'
import Perfil from '../Perfil'
import { BotaoConfirmacao, ConfirmacaoContainer } from './styles'
import { Link } from 'react-router-dom'

const Confirmacao = () => (
  <>
    <Overlay src={overlay} />
    <BarraLateral>
      <ConfirmacaoContainer>
        <h5>Pedido realizado - Order ID</h5>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <BotaoConfirmacao>
          <Link to="/">Concluir</Link>
        </BotaoConfirmacao>
      </ConfirmacaoContainer>
    </BarraLateral>
    <Perfil />
  </>
)

export default Confirmacao
