import './login.css'

const LoginFormulario = () => {
  return (
    <div className='area'>
      <div className='container'>
        <div className='login'>
          <h2>Iniciar Sessão</h2>
          <input type="text" placeholder='Login' />
          <input type="text" placeholder='Senha'/>
          <button>Entrar</button>
        </div>
      </div>
    </div>
  )
}

export default LoginFormulario