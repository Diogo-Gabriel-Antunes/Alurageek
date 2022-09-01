import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../../components/navbar"
import Titulo from "../../components/Cards/titulo"
import Card from "../../components/Cards/card"
import './DetalhesProduto.css'
import Footer from "../../components/footer"


const DetalhesProduto = () => {
  const parametros = useLocation()
  const [produto, setProduto] = useState([])
  const [cards,setCards] = useState([]);

  const rota = parametros.pathname.split('/')
  

  useEffect(() => {
    axios.get(`http://localhost:3000${parametros.pathname}`)
      .then(resposta => {
        setProduto(resposta.data)
      })
      .catch(erro => console.log(erro))

    axios.get(`http://localhost:3000/${rota[1]}`)
      .then(resposta =>{
        setCards(resposta.data)
      }).catch(erro=>{
        console.log(erro)
      })
  })
  return (
    <>
      <NavBar />
      <div className="DetalhesProduto">
        <img src={produto.imagem} alt={produto.nome} />
        <div>
          <h3>{produto.nome}</h3>
          <p className="DetalhesProduto_preco">{produto.preco}</p>
          <p className="DetalhesProduto_descricao">{produto.descricao}</p>
        </div>
      </div>
      <Titulo titulo="Produtos Similares" rota={`/${rota[1]}`}/>
      <Card produtos={cards}/>
      <Footer/>
    </>
  )
}

export default DetalhesProduto