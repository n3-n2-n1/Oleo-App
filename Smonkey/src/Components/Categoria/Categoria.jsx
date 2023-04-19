import React from "react";
import style from "./index.module.css";


export const Categoria = () => {
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.cta}>
          <div className={style.text}>
            <h2 >Parafernalia</h2>
            <p>
            Accesorios y articulos para el fumador.
            </p>
          </div>
        </div>
      </div>

      <div className={style.container1}>
        <div className={style.cta}>
          <div className={style.text}>
            <h2>RSO</h2>
            <p>
              Viví una experiencia única.
            </p>
          </div>
        </div>
      </div>

      <div className={style.container1}>
        <div className={style.cta}>
          <div className={style.text}>
            <h2>Cultivo Indoor</h2>
            <p>
            Prepararativos para dar inicio a nuestro cultivo de cannabis indoor.
            </p>
          </div>
        </div>
      </div>

      <div className={style.container1}>
        <div className={style.cta}>
          <div className={style.text}>
            <h2>Herramientas</h2>
            <p>
              Descubre las mejores herramientas para tener éxito en tu cosecha.
            </p>
          </div>
        </div>
      </div>

      

    </div>
  );
};
