import './card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='card'>
      {props.produtos.map((item,index) => {
        return (
          <div className='card_principal'>
            <img src={item.imagem} alt={item.nome} />
            <p className='card_NomeProduto'>{item.nome}</p>
            <p className='card_Preco'>{item.preco}</p>
            <Link to={`/${item.categoria}/${item.id}`}>Ver Produto</Link>
          </div>)
      })}

    </div>
  )
}

export default Card