import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ConfirmacaoContainer = styled.div`
  margin-top: 16px;
  padding-left: 8px;
  padding-right: 8px;

  h5 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const BotaoConfirmacao = styled.div`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  margin-bottom: 8px;

  a {
    text-decoration: none;
    color: ${cores.laranja};
  }
`
