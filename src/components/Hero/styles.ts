import styled from 'styled-components'
import hero from '../../assets/images/hero.svg'

export const HeroContainer = styled.header`
  text-align: center;
  width: 100%;
  height: 384px;
  background-image: url(${hero});

  img {
    margin-top: 64px;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    margin-top: 136px;
  }
`
