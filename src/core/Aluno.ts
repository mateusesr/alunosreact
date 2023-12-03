export default class Aluno {
    id: number | null;
    nome: string;
    email: string;
    data_nascimento: string;
    disciplinas: string;
    constructor(id: number | null, nome: string, email: string,
        data_nascimento: string, disciplinas: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nascimento = data_nascimento;
        this.disciplinas = disciplinas;
    }
    static geraAlunoMock
        () {
        return [
            new Aluno(1, "Mateus Elias Sarmento da Rosa", "mateus1@gmail", "17/01/2000", "Kotlin"),
            new Aluno(2, "Mateus Elias", "mateus2@gmail", "17/01/2001", "React"),
            new Aluno(3, "Mateus Sarmento", "mateus3@gmail", "17/01/2002", "Next"),
            new Aluno(4, "Mateus da Rosa", "mateus4@gmail", "17/01/2003", "InteliJ")
        ]
    }
}
