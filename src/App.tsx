import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import ModalPage from './pages/Modal'
import Carrinho from './pages/Carrinho'
import Entrega from './pages/Entrega'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { path: '/perfil', element: <Perfil /> },
  { path: '/modal', element: <ModalPage /> },
  { path: '/carrinho', element: <Carrinho /> },
  { path: '/entrega', element: <Entrega /> }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
