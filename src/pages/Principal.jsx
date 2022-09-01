import NavBar from "../components/navbar"
import Banner from "../components/banner"
import Titulo from "../components/Cards/titulo"
import Card from "../components/Cards/card"
import Footer from "../components/footer"
import Desenvolvedor from "../components/desenvolvedor"
import { useEffect, useState } from "react"
import axios from "axios"


const Principal = () => {
  const [ starwars, setStarWars] = useState([]);
  const [ consoles, setConsoles] = useState([]);
  const [ diversos, setDiversos] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/starwars')
      .then(resposta =>{
        setStarWars(resposta.data)
      })
      .catch(erro =>{
        console.log(erro)
      },[])
      axios.get('http://localhost:3000/console')
      .then(resposta =>{
        setConsoles(resposta.data)
      })
      .catch(erro =>{
        console.log(erro)
      },[])
      axios.get('http://localhost:3000/diversos')
      .then(resposta =>{
        setDiversos(resposta.data)
      })
      .catch(erro =>{
        console.log(erro)
      },[])
      
  })
  return (
    <>
      <NavBar />
      <Banner />
      <Titulo titulo="Star Wars" rota='starwars' />
      <Card produtos={starwars} />
      <Titulo titulo="Consoles" rota='consoles' />
      <Card produtos={consoles} />
      <Titulo titulo="Diversos" rota='diversos' />
      <Card produtos={diversos} />
      <Footer />
      <Desenvolvedor />
    </>)
}

export default Principal