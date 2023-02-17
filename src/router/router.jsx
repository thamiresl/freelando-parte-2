import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path:'cadastro',
                element: <h1>Selecão de tipo de cliente</h1>,
                children: [
                    {
                        path: 'cliente',
                        element: <h1>Interesesses</h1>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1>Dados pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1>Concluído</h1>
                    }
                ]
            }
        ],
    },
]);