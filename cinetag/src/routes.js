import Inicio from "./pages/Inicio";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Fim from "./pages/Fim";
import Favoritos from "pages/Favoritos/favoritos";
import Player from "pages/Player/player";
import NaoEncontrado from "pages/NaoEncontrado/naoEncontrado";
import PaginaBase from "pages/PaginaBasica/paginaBasica";


let AppRoutes = () =>{
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}></Route>
                    <Route path="fim" element={<Fim/>}></Route>
                    <Route path = "favoritos" element={<Favoritos/>}></Route>
                    <Route path =":id" element={<Player/>}></Route>
                    <Route path ="*" element={<NaoEncontrado />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;