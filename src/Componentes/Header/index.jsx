import { Link } from 'react-router-dom'
import './style.css'

function Header() {
return(

<header>

<h2>Avalição </h2>
<Link to={"/"}>
<button>HOME</button>
</Link>
</header>
)
}
export default Header