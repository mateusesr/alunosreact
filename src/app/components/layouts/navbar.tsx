export default function Navbar(props: any) {
    return (
        <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left
                            sm:justify-between py-4 px-6 bg-blue-400 text-gray-900 shadow
                            sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">Crud de Alunos</div>
            <div>
                <a href="/" className="text-lg no-underline hover:text-red-900 ml-2"> Home </a>
                |
                <a href="/alunos" className="text-lg no-underline hover:text-red-900 ml-2">Alunos </a>
            </div>
        </nav>
    )
}