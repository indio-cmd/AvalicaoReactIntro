import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Atividade9() {
const[idade, setIdade] = useState("")
const[resultado, setResultado] = useState("")

function Idade(event) {
event.preventDefault();
console.log
setResultado(Number (idade) <16("Nao pode votar")  (idade) <=17("Voto opcional")  (idade) >18("Voto obrigatório"))


}
    return(
    <>
<h2>Atividade9</h2>

<Link to='/Home' >
<button>Home</button>
</Link>

   <form onSubmit={Idade} >
   <label >Digite uma Idade </label>
   <input
        type="number"
        value={idade}
        onChange={(event) => setIdade(event.target.value)}
        
/>

<br />

<button type='Submit' >Vota ou não</button>   
</form>
    </>
)
}
export default Atividade9