import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import ControleLivro from './controle/ControleLivros';

function App() {
  const controleLivros = new ControleLivro();

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Catalago</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dados">Novo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/home" element={<LivroLista livros={controleLivros.obterLivros()} />} />
          <Route path="/dados" element={<LivroDados/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

