import { Link } from "react-router-dom"
import "./banner.css"

const Banner = ()=>{
  return(
    <div className="banner">
      <h1>Dezembro Promocional</h1>
      <h3>Produtos selecionados com 33% de desconto</h3>
      <button><Link to={"/consoles"}>Ver Consoles</Link></button>
    </div>
  )
}

export default Banner