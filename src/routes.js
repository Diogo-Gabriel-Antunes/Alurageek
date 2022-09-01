import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DetalhesProduto from './pages/DetalhesProduto';
import PaginaLogin from './pages/Login';
import NovoProduto from './pages/NovoProduto/NovoProduto';
import Principal from './pages/Principal';
import TodosOsProdutos from './pages/TodosOsProdutos';

export default function AppRouter(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/login' element={<PaginaLogin/>}/>
        <Route path='/starwars' element={<TodosOsProdutos/>}/>
        <Route path='/:produto/:id' element={<DetalhesProduto/>}/>
        <Route path='/consoles' element={<TodosOsProdutos/>}/>
        <Route path='/diversos' element={<TodosOsProdutos/>}/>
        <Route path='/novoproduto' element={<NovoProduto/>}/>
      </Routes>
    </Router>
  )
}