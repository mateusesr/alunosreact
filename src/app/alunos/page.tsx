import Aluno from "@/core/Aluno";
import Layout from "../components/layout";
import Tabela from "../components/tabela";

export default function Alunos() {
    const alunos = Aluno.geraAlunoMock()
    return (
        <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-bl from-gray-800 via-gray-400 to-gray-800
        text-gray-900`}>
            <Layout
                titulo="Alunos Cadastrados">
                <Tabela alunos={alunos} />
            </Layout>
        </div>
    )
}