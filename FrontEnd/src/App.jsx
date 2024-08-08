import { BrowserRouter, Routes } from 'react-router-dom'
import { renderRoutes, routes } from './routes'
import { AuthProvider } from './componentes/AuthProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {renderRoutes(routes)}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
