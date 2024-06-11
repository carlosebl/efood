import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import overlay from '../../assets/images/overlay.png'
import Perfil from '../Perfil'
import { Overlay } from '../../styles'

const ModalPage = () => (
  <>
    <Link to="/perfil">
      <Overlay src={overlay} />
    </Link>
    <Modal />
    <Perfil />
  </>
)

export default ModalPage
