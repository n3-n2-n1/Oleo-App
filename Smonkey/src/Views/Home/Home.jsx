import { Card } from "../../Components/Card/Card";
import { Hero } from "../../Components/Hero/Hero";
import { Ofertas } from "../../Components/Ofertas/Ofertas";
import Recomendados from "../../Components/Recomendados/recomendados.jsx";
import style from "./index.module.css";
import {ProductoCard} from "../../Components/ProductoCard/ProductoCard";
import {Categoria} from "../../Components/Categoria/Categoria";
import {Faq} from "../../Components/FAQ/Faq.jsx";
const Home = () => {
  return (
    <div className={style.container}>
      <Hero />
      <ProductoCard />
      <Categoria/>
      <Faq />

    </div>
  );
};

//componente loading > onclicck > setstatus (!clicked) onScroll > (!scroll){<link> "/home" </link>}>
// css: .loading{background negro, width 100} loading:hover p{}
export default Home;
