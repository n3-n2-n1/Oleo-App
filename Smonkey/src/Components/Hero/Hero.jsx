import style from "./index.module.css";
import main_img from "../../Assents/Frame1.png";
import Liquido from "../../Assents/products/hibridos-men.png";
import Picador from "../../Assents/products/picador-lion-circus.png";
import Picapica from "../../Assents/products/picador-smonkey.png";
import Picaplas from "../../Assents/products/picadores-plastico.png";
import Picamet from "../../Assents/products/picador-plateado.jpg";
import Picadarth from "../../Assents/products/picador-darth-vader-.jpg";
import Magic from "../../Assents/products/magiclick.jpg";
import Maquina from "../../Assents/products/MAQUINa.png"





export function Hero() {
  return (
    <div className={style.container}>
      <div className={style.mScroll}>
        <div className={style.mScrollTitle}>
          <div>
            <h1>
              <img src={Liquido} alt="" />
              <img src={Picador} alt="" />
              <img src={Picapica} alt="" />
              <img src={Picaplas} alt="" />
              <img src={Picamet} alt="" />
              <img src={Picadarth} alt="" />
              <img src={Magic} alt="" />
              <img src={Maquina} alt="" />
              <img src={Liquido} alt="" />
              <img src={Picador} alt="" />
              <img src={Picapica} alt="" />
              <img src={Picaplas} alt="" />
              <img src={Picamet} alt="" />
              <img src={Picadarth} alt="" />
              <img src={Magic} alt="" />
              <img src={Maquina} alt="" />
             
            </h1>
            <a href="https://dribbble.com/JulianoF">  </a>
            <h1>
              <img src={Liquido} alt="" />
              <img src={Picador} alt="" />
              <img src={Picapica} alt="" />
              <img src={Picaplas} alt="" />
              <img src={Picamet} alt="" />
              <img src={Picadarth} alt="" />
              <img src={Magic} alt="" />
              <img src={Maquina} alt="" />
              <img src={Liquido} alt="" />
              <img src={Picador} alt="" />
              <img src={Picapica} alt="" />
              <img src={Picaplas} alt="" />
              <img src={Picamet} alt="" />
              <img src={Picadarth} alt="" />
              <img src={Magic} alt="" />
              <img src={Maquina} alt="" />

            </h1>
          </div>
        </div>
      </div>

      <div className={style.productWrapper}>
        <div className={style.product}>
          <section className={style.imgSection}>
            <div className={style.productImage}>
              <img src={main_img} />
            </div>
          </section>
          <section className={style.infoSection}>
            <div className={style.infoWrapper}>
              <div className={style.infoTitle}>En SOMETHING</div>
              <div className={style.infoDescWrapper}>
                <div className={style.infoDesc}>
                  Contamos con productos y accesorios de Tabaquería con características diferenciales.
                </div>
              </div>
              <div className={style.actionBtn}>
                <input type="submit" value="Conocé Más" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}