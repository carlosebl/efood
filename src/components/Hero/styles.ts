import styled from 'styled-components'
import hero from '../../assets/images/hero.svg'

export const HeroContainer = styled.header`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 384px;
  background-image: url(${hero});

  img {
    margin-top: 64px;
  }

  h2 {
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    margin-top: 136px;
  }
`

export const HeroSlogan = styled.div`
  text-align: center;
`
