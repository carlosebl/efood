import styled from 'styled-components'
import hero from '../../assets/images/hero.svg'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${hero});
  padding: 64px 0;
  text-align: center;
`

export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 256px;
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
    color: ${cores.laranja};
  }
`
