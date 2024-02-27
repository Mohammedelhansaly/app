import { useRoutes } from 'react-router-dom'
import ThemeRoutes from './Routers/Router'
import './App.css'


function App() {
  const Routing = useRoutes(ThemeRoutes)

  return (
    <>
      {Routing}
    </>
  )
}

export default App
