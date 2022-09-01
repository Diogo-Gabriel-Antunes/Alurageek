import NavBar from "../../components/navbar"
import './NovoProduto.css'
import Footer from "../../components/footer"

const NovoProduto = () => {
  return (
    <div>
      <NavBar />
      <div className="NovoProduto">
        <div className="NovoProduvo_div">
          <h3>Adicionar Novo Produto</h3>
          <label htmlFor="UrlImagem">URL da imagem</label>
          <input type="text" htmlFor="UrlImagem" />
          <label htmlFor="categoria">Categoria</label>
          <input type="text" htmlFor='categoria' />
          <label htmlFor="NomeProduto">Nome do produto</label>
          <input type="text" htmlFor='NomeProduto' />
          <label htmlFor="PrecoProduto">Preço do produto</label>
          <input type="text" htmlFor='PrecoProduto' />
          <label htmlFor="descricao">Descrição do produto</label>
          <input type="text" htmlFor='descricao' />
          <button>Adicionar produto</button>
        </div>
       

      </div>
      <Footer/>
    </div>
  )
}

export default NovoProduto