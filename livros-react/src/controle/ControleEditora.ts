import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
    {
        codEditora: 1,
        nome: "Sextante",
    },
    {
        codEditora: 2,
        nome: "Alta Books",
    },
    {
        codEditora: 3,
        nome: "Faro Editorial",
    },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class ControleEditora {

    getNomeEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string {
        // arrow function dentro do find para encontrar a editora
        const editora = editoras.find((editora) => editora.codEditora === codEditora);
        // vai retornar editora se for verdadeira 
        return editora ? editora.nome : "Editora não encontrada";
    }
}

