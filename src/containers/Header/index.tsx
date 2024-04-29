import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderMenu } from './styles'
import logo from '../../assets/images/logo.png'
import { Container } from '../../styles'

const Header = () => (
  <HeaderContainer>
    <Container>
      <HeaderMenu>
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="efood" />
        <a href="#">
          <span>0</span> produto(s) no carrinho
        </a>
      </HeaderMenu>
    </Container>
  </HeaderContainer>
)

export default Header
