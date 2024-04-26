import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './containers/Footer'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { path: '/perfil', element: <Perfil /> }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
