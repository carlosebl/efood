import styled from 'styled-components'
import pastaBanner from '../../assets/images/pasta_banner.png'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${pastaBanner});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${cores.branco};

  h3 {
    font-size: 32px;
    font-weight: 100;
    padding-top: 24px;
  }

  h2 {
    margin-top: 152px;
    font-size: 32px;
    font-weight: 900;
  }
`
