import { HeroContainer } from './styles'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer>
    <img src={logo} alt="eFood" />
    <h2>
      Viva experiências gastronômicas no
      <br />
      conforto da sua casa
    </h2>
  </HeroContainer>
)

export default Hero
