import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
//import PaginaInicial from "../paginas/PaginaInicial"

export const router = createBrowserRouter([
    {
        path: "/",
       // element: <h1>Bem Vindo!</h1>,
        children: [{
            path: 'cadastro',
            element: <SelecaoCliente />,
            children: [
                {
                    path: 'cliente',
                    element: <h1>Interesses</h1>
                },
                {
                    path: 'dados-pessoais',
                    element: <h1>Dados Pessoais</h1>
                },
                {
                    path: 'concluido',
                    element: <h1>Concluído</h1>
                }
            ]
        }],
    },
]);