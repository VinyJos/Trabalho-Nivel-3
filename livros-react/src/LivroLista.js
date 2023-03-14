import { useState, useEffect } from "react";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

function LinhaLivro(props) {
    const livro = props.livro;
    const excluir = props.excluir;
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    function handleExcluir() {
        excluir(livro.codigo);
    }

    const index = props.index;
    const linhaClasse = index % 2 === 0 ? 'linha-par' : 'linha-impar';
    
    return (
        <tr key={livro.codigo} className={linhaClasse}>
            <td></td>
            <td>
                <p className="my-2">{livro.titulo}</p>
                <button onClick={handleExcluir} className="btn btn-danger my-2">Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td class="text-center">{nomeEditora}</td>
            <td class="text-center">
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
    
}

export default function LivroLista(props) {
    const [livros, setLivros] = useState(props.livros);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const controleLivros = new ControleLivros();
        setLivros(controleLivros.obterLivros());
        setCarregado(true);
    }, [carregado]);
    
    const excluir = (codigo) => {
        const controleLivros = new ControleLivros();
        controleLivros.excluir(codigo);
        setCarregado(false);
    };
    
    return (
        <main class="container">
            <h1 class="my-4">Catálago de Livros</h1>
            <table class="table">
                <thead>
                    <tr class="my-5 bg-black text-light">
                        <th></th>
                        <th class="col-2 text-center">Título</th>
                        <th class="col-6">Resumo</th>
                        <th class="col-2 text-center">Editora</th>
                        <th class="col-2 text-center">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro livro={livro} excluir={excluir} key={livro.codigo} />
                    ))}
                </tbody>
            </table>
        </main>
    );
    
}

