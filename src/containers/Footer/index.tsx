import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import { RedesSociais, RodapeContainer } from './styles'

const Footer = () => (
  <RodapeContainer>
    <img src={logo} alt="efood" />
    <RedesSociais>
      <a href="#">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
    </RedesSociais>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </RodapeContainer>
)

export default Footer
