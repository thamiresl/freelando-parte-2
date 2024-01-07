import { RouterProvider } from "react-router-dom"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import { Estilos } from "./componentes/EstilosGlobais/Estilos"
import { router } from "./router/router"

function App () {
  return (<ProvedorTema>
    <Estilos>
      <RouterProvider router={router}/>
    </Estilos>
  </ProvedorTema>)
} 

export default App
