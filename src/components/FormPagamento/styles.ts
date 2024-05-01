import styled from 'styled-components'
import { cores } from '../../styles'

export const FormPagamentoContainer = styled.div`
  margin-top: 16px;
  padding-left: 8px;
  padding-right: 8px;

  h5 {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

export const CampoTexto = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input`
  border: none;
  background-color: ${cores.bege};
  color: ${cores.cinza};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`

export const CamposNumericos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 8px;
`

export const InputCartao = styled.input`
  margin-top: 8px;
  width: 228px;
  border: none;
  background-color: ${cores.bege};
  color: ${cores.cinza};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`

export const InputCVV = styled.input`
  margin-top: 8px;
  width: 86px;
  border: none;
  background-color: ${cores.bege};
  color: ${cores.cinza};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`

export const InputNumerico = styled.input`
  margin-top: 8px;
  width: 156px;
  border: none;
  background-color: ${cores.bege};
  color: ${cores.cinza};
  padding: 8px;
  font-size: 14px;
  font-weight: bold;
`

export const Botoes = styled.div`
  margin-top: 24px;
`

export const BotaoPagamento = styled.div`
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
