import { BrowserRouter as Router, Route,Routes,Link } from 'react-router';
import './App.css'
import Equipo from './Equipo'
import Favoritos from './Favoritos'
import Home from './home'
import Informativa from './Informativa'
import Original from './Original'
import Usuario from './Usuario'

function App() {
  return (
    <>
    
    <Router>
      <nav className='c-menu'>
      <Link to="/">Home</Link>
      <Link to="/Favoritos">Favoritos</Link>
      <Link to="/Original">Original</Link>
      <Link to="/Informativa">Informativa</Link>
      <Link to="/Usuario">Usuario</Link>
      </nav>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/Original' element={<Original/>}></Route> 
        <Route path='/Informativa' element={<Informativa/>}></Route> 
        <Route path='/Favoritos' element={<Favoritos/>}></Route>
        <Route path='/Usuario' element={<Usuario/>}></Route>
        <Route path='/Equipo/:equipo' element={<Equipo/>}></Route>   
     </Routes>
    </Router>

    </>
  )
}

export default App
