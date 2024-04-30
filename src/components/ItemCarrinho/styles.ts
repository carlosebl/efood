import styled from 'styled-components'
import { cores } from '../../styles'

export const ItemCarrinhoContainer = styled.div`
  background-color: ${cores.bege};
  color: ${cores.laranja};
  padding: 8px;
  width: 344px;
  height: 100px;
  display: flex;
  margin-left: 8px;
  margin-bottom: 16px;
`

export const ImagemCarrinho = styled.img`
  width: 80px;
  height: 80px;
`

export const DetalhesCarrinho = styled.div`
  margin-left: 8px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    margin-top: 16px;
  }
`

export const Lixeira = styled.img`
  margin-top: 64px;
  margin-left: 84px;
`
