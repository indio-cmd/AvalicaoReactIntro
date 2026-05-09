import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Atividade9() {
    const [idade, setIdade] = useState("")
    const [resultado, setResultado] = useState("")

    function Idade(event) {
        event.preventDefault();
        console.log
        setResultado
        if (idade < 16)
            alert("Não pode votar")
        else (idade < 17)
        alert("Voto opcional")
        if (idade > 18)
            alert("Voto obrigatório")

    }
    return (
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
            <p>{resultado}</p>
        </>
    )
}
export default Atividade9