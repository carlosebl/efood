import Modal from '../../components/Modal'
import overlay from '../../assets/images/overlay.png'
import Perfil from '../Perfil'
import { Overlay } from '../../styles'

const ModalPage = () => (
  <>
    <Overlay src={overlay} />
    <Modal />
    <Perfil />
  </>
)

export default ModalPage
