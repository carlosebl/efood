import styled from 'styled-components'
import { cores } from '../../styles'

export const CarrinhoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-top: 24px;
  margin-bottom: 16px;
`

export const BotaoCarrinho = styled.div`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
  margin-left: 8px;
  margin-right: 8px;

  a {
    text-decoration: none;
    color: ${cores.laranja};
  }
`
