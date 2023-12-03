import Aluno from "@/core/Aluno"
interface TabelaProps {
    alunos: Aluno[]
}
export default function Tabela(props: TabelaProps) {
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-5">Id</th>
                <th className="text-left p-5">Nome</th>
                <th className="text-left p-5">E-mail</th>
                <th className="text-left p-5">Disciplinas</th>
            </tr>)
    }
    function renderDados() {
        return props.alunos?.map((aluno, i) => {
            return (<tr key={aluno.id}>
                <td className="text-left p-5">{aluno.id}</td>
                <td className="text-left p-5">{aluno.nome}</td>
                <td className="text-left p-5">{aluno.email}</td>
                <td className="text-left p-5">{aluno.disciplinas}</td>
            </tr>)
        })
    } return (
        <table> <thead>
            {renderHeader()} </thead>
            <tbody>
                {renderDados()} </tbody>
        </table>)
}