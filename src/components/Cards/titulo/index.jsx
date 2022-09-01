import { Link } from 'react-router-dom';
import './titulo.css';

const Titulo = (props) => {
  return (
    <div className='titulo'>
      <div className="titulo_titulo">
        <h3 className='titulo__h3'>{props.titulo}</h3>
        <Link to={props.rota}>Ver tudo</Link>
      </div>
    </div>
  )
}

export default Titulo