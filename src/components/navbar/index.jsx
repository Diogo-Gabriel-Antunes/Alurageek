import { Navigate } from 'react-router-dom'
import './navbar.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='NavBar_formato'>
        <div className='NavBar_logo'>
          <Link to='/'><img src="/assets/navbar/logo512.png" alt="Logo" /></Link>
          
          <div className='NavBar_Pesquisa'>
            <input type="text" />
            <a href="#" > 
              <img src="/assets/navbar/loupe.png" alt="" className='NavBar_Lupa' />
            </a>
          </div>
        </div>
        <div>
          <button  className='NavBar_btn'><Link to='/login'>Login</Link></button>
          
        </div>
      </div>
    </div>
  )
}

export default NavBar