import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ItemCard = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 8px;
  max-width: 320px;
  width: 100%;
  margin-bottom: 32px;

  img {
    width: 100%;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`

export const BotaoItem = styled.div`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;

  a {
    text-decoration: none;
    color: ${cores.laranja};
  }
`
