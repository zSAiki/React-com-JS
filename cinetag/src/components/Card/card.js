import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconesDesfavoritar from "./desfavoritar.png"
function Card({id, titulo, capa }){
    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
const icone= !ehFavorito? iconeFavoritar : iconesDesfavoritar;
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick = {()=>{
                    adicionarFavorito({id, titulo, capa})
                }}/>
        </div>
        )
}
export default Card;