import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import Home from './pages/Home'
import Atividade9 from './pages/Atividade9'
import Atividade1 from './pages/Atividade1'


function App() {
  //const [count, setCount] = useState(0)
  //  onClick={() => setCount((count) => count + 1)}
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path='/Atividade9' element={<Atividade9 />} />
        <Route path='/Atividade1' element={<Atividade1 />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
