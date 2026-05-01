import { useState } from 'react'
import './style.css'
// Peça ao usuário o nome de um produto e o preço.
//  Mostre uma mensagem dizendo quanto custa o produto.
function Atividade1() {
const [preco, setPreco] = useState("")
const [item, setItem] = useState("")
const[resultado, setResultado] = useState("")


function produto(event) {
event.preventeDefault();
console.log
setResultado(Number(preco) + (item))
}



    return(

   <>
    <h2>Atividade1</h2>

    <Link to='/Home' >
    <button>Home</button>
    </Link>


<form onSubmit={produto} >

<label htmlFor="text">Digite o nome de um produto</label>
<input
type="text"
value={(item)}
onChange={(event)=> setPreco(event.target.value) }
/>

<label htmlFor="text">Digite o preço do produto</label>
<input
type="number"
value={(preco)}
onChange={(event)=> setPreco(event.target.value) }

/>
<label htmlFor="text">Vou ver quanto ficou</label>

<br />

<button type='onSubmit'> Preço </button>

    </form>

    </>

)
}
export default Atividade1