import { Overlay } from '../../styles'
import overlay from '../../assets/images/overlay.png'
import BarraLateral from '../../containers/BarraLateral'
import Perfil from '../Perfil'
import FormEntrega from '../../components/FormEntrega'

const Entrega = () => (
  <>
    <Overlay src={overlay} />
    <BarraLateral>
      <div>
        <FormEntrega></FormEntrega>
      </div>
    </BarraLateral>
    <Perfil />
  </>
)

export default Entrega
