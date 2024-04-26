import { HeaderContainer, HeaderMenu } from './styles'
import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'

const Header = () => (
  <HeaderContainer>
    <Container>
      <HeaderMenu>
        <a href="#">Restaurantes</a>
        <img src={logo} alt="efood" />
        <a href="#">
          <span>0</span> produto(s) no carrinho
        </a>
      </HeaderMenu>
    </Container>
  </HeaderContainer>
)

export default Header
