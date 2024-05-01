import { Overlay } from '../../styles'
import overlay from '../../assets/images/overlay.png'
import BarraLateral from '../../containers/BarraLateral'
import Perfil from '../Perfil'
import FormPagamento from '../../components/FormPagamento'

const Pagamento = () => (
  <>
    <Overlay src={overlay} />
    <BarraLateral>
      <div>
        <FormPagamento></FormPagamento>
      </div>
    </BarraLateral>
    <Perfil />
  </>
)

export default Pagamento
