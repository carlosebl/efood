import { styled } from 'styled-components'
import { cores } from '../../styles'
import pasta from '../../assets/images/pasta.png'

export const CardRestaurante = styled.div`
  background-color: ${cores.branco};
  margin-bottom: 48px;
  border: 1px solid ${cores.laranja};
  position: relative;
`

export const FundoCard = styled.div`
  height: 216px;
  background-image: url(${pasta});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
`
export const TagRestaurante = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  display: inline-block;
  padding: 6px 4px;
  position: absolute;
  top: 16px;
  right: 16px;

  p {
    font-size: 12px;
    font-weight: bold;
  }
`

export const InfoRestaurante = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.div`
  display: flex;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`

export const Botao = styled.div`
  display: inline-block;
  background-color: ${cores.laranja};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${cores.bege};
  }
`
