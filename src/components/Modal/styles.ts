import { styled } from 'styled-components'
import { cores } from '../../styles'

export const ModalContainer = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  width: 1024px;
  height: 372px;
  display: flex;
  padding-left: 32px;
  padding-bottom: 32px;
  position: absolute;
  top: 546px;
`

export const ModalFoto = styled.img`
  margin-top: 32px;
`

export const ModalDescricao = styled.div`
  margin-top: 32px;
  margin-left: 24px;

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`

export const Botao = styled.div`
  display: inline-block;
  background-color: ${cores.bege};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${cores.laranja};
  }
`

export const BotaoFechar = styled.div`
  width: 16px;
  height: 16px;
  margin-top: 8px;
  margin-right: 8px;
`
