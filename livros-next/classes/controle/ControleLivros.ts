import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: "Os segredos da mente milionária",
        resumo: "T. Harv Eker desmistifica o motivo pelo qual algumas pessoas estão destinadas à riqueza e outras a uma vida de dureza. Se você quer conhecer as causas fundamentais do sucesso, leia este livro.- Robert G. Allen, autor de O milionário em um minuto",
        autores: ["T. Harv Eker"]
    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: "Pai Rico, Pai Pobre",
        resumo: "Edição de 20 anos atualizada e ampliada: O que os ricos ensinam a seus filhos sobre dinheiro.",
        autores: ["Robert T. Kiyosaki"]
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: "A garota do lago",
        resumo: "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas.",
        autores: ["Charlie Donlea"]
    }
]

export default class ControleLivro {
    
    obterLivros (): Array<Livro>{
        return livros;
    }

    incluir(livro:Livro):void {
        const codigoMaisAlto = livros.reduce((codigoMaisAlto, livroAtual) => {
            return livroAtual.codigo > codigoMaisAlto ? livroAtual.codigo : codigoMaisAlto;
        }, 0);
        livro.codigo = codigoMaisAlto + 1;
        livros.push(livro);
    }
    
    excluir(codigo:number): void {
        const indice = livros.findIndex(livro => livro.codigo === codigo);
        if (indice !== -1) {
            livros.splice(indice, 1);
        }
    }
}
