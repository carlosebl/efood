import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  amarelo: '#FFB930',
  bege: '#FFEBD9',
  branco: '#FFFFFF',
  gelo: '#FFF8F2',
  laranja: '#E66767',
  cinza: '#4b4b4b'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body {
    background: ${cores.gelo};
    color: ${cores.laranja};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Overlay = styled.img`
  position: absolute;
  width: 100%;
  height: 1784px;
`
