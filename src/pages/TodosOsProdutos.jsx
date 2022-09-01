import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Cards/card";
import TituloNovoProduto from "../components/Cards/titulo/TituloNovoProduto";
import Footer from "../components/footer";
import NavBar from "../components/navbar";


const TodosOsProdutos = () => {
  const [todosProdutos, setTodosProdutos] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:3000/todosProdutos')
      .then(resposta=>{
        setTodosProdutos(resposta.data)
      }).catch(erro =>{
        console.log(erro)
      })
  })

  return (
    <>
      <NavBar />
      <TituloNovoProduto/>
      <Card produtos={todosProdutos} />
      <Footer />
    </>
  );
}

export default TodosOsProdutos