import styled from 'styled-components'
import { cores } from '../../styles'

export const TagContainer = styled.div`
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
