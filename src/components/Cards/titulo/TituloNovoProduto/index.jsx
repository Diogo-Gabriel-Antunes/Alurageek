import { Link } from "react-router-dom"
import './TituloNovoProduto.css'

const TituloNovoProduto = ()=>{
  return(
      <div className="TodosProdutos">
        <h3>Todos os Produtos</h3>
        <button><Link to='/novoproduto'>Adicionar Produto</Link></button>
      </div>
  )
}

export default TituloNovoProduto