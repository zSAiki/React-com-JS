import Banner from "components/Banner/banner";
import Titulo from "components/Titulo/titulo";
import Card from "components/Card/card";
import videos from '../../json/db.json';
import styles from "./Inicio.module.css";


function Inicio() {
  return (
    <>
      
      <Banner imagem = "home"/>
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes!</h1>
      </Titulo>
      <section className= {styles.container}>
        {videos.map((video) => {
         return  <Card {...video} key = {video.id} />
        })}
      </section>

    </>
  );
}

export default Inicio;
