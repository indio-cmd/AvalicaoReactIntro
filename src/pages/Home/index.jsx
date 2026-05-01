import { Link } from 'react-router-dom'
import './style.css'

function Home() {
return(
    <>
    <h2>Minha prova</h2>

    <Link to='/Atividade1' >
    <button>Atividade1</button>
    </Link>


    <Link to='/Atividade9' >
    <button>Atividade9</button>
    </Link>

    </>
)
}
export default Home