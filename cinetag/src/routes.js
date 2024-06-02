import Inicio from "./pages/Inicio";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Fim from "./pages/Fim";
import Favoritos from "pages/Favoritos/favoritos";
import Header from "components/Header/header";
import Footer from "components/Footer/footer";
import Container from "components/Container/container";
import FavoritosProvider from "contextos/Favoritos";

let AppRoutes = () =>{
    return(
        <BrowserRouter>
        <Header/>
        <Container>
            <FavoritosProvider>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/fim" element={<Fim/>}></Route>
                <Route path = "/favoritos" element={<Favoritos/>}></Route>
            </Routes>
            </FavoritosProvider>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;