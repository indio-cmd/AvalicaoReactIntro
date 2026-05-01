import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import Home from './pages/Home'
import Atividade9 from './pages/Atividade9'


function App() {
  //const [count, setCount] = useState(0)
//  onClick={() => setCount((count) => count + 1)}
  return (
    <>
  <Header/>
<Home/>
       <Routes>
 <Route paty='/Atividade9'  element={<Atividade9 />}  />
        
        </Routes> 
      <Footer/>
    </>
  )
}

export default App
