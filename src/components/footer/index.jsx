import './footer.css'

const Footer = () => {
  return (

    <div className='footer'>
      <div>
        <img src="/assets/navbar/logo512.png" alt="logo" />

      </div>
      <div className='footer_links'>
        <a href="">Quem somos Nos</a>
        <a href="">Politica de privacidade</a>
        <a href="">Programa fidelidade</a>
        <a href="">Nossas lojas</a>
        <a href="">Quero ser franqueado</a>
        <a href="">Anuncie aqui</a>
      </div>
      <div className='footer_formulario'>
        <label htmlFor="FaleConosco">Fale Conosco</label>
        <input type="text" id='FaleConosco' placeholder='Nome'/>
        <textarea name="descricao" id="descricao" cols="30" rows="10" placeholder='Escreva sua Mensagem'></textarea>
        <button>Enviar Mensagem</button>
      </div>
    </div>
  )
}

export default Footer