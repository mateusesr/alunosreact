import Titulo from "./titulo";
interface LayoutProps {
    titulo: string
    children: any
}
export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex flex-col w-2/5
 bg-gray-300 text-gray-900 rounded-md`}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-5">
                {props.children}
            </div>
        </div>
    )
}