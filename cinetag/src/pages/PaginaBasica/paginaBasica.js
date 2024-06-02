import Container from "components/Container/container"
import Footer from "components/Footer/footer"
import Header from "components/Header/header"
import FavoritosProvider from "contextos/Favoritos"
import { Outlet } from "react-router-dom"


function PaginaBase(){
    return(
        <main>
            <Header />
            <FavoritosProvider>
            <Container>
                <Outlet/>
            </Container>
            </FavoritosProvider>
            <Footer />

        </main>
    )
}

export default PaginaBase