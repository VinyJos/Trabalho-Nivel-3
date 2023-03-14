import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

export default function LivroDados() {
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome
  }));
  
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  
  const navigate = useNavigate();
  
  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };
  
  const incluir = (evento) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };
    controleLivros.incluir(livro);
    navigate('/');
  };
  
  return ( 
    <main>
      <h2>Inclusão de Livro</h2>
      <form onSubmit={incluir}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input type="text" id="titulo" value={titulo} onChange={(evento) => setTitulo(evento.target.value)} />
        </div>
        <div>
          <label htmlFor="resumo">Resumo:</label>
          <textarea id="resumo" value={resumo} onChange={(evento) => setResumo(evento.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="autores">Autores:</label>
          <textarea id="autores" value={autores} onChange={(evento) => setAutores(evento.target.value)}></textarea>
        </div>
        <div>
          <label htmlFor="codEditora">Editora:</label>
          <select id="codEditora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <button type="submit">Incluir</button>
      </form>
    </main>
  );
}


