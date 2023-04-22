import React from "react";
import style from "./index.module.css";



export const Faq = () => {
  return (
    <div className={style.container}>
      <div className={style.faqSection}>
        <header>
          <h2>Preguntas Frecuentes</h2>
        </header>

        <details>
          <summary>
            <h4>Formas y Costos de Entrega</h4>
            <span className={style.materialOutlined}>-</span>
          </summary>
          <p>
            Existen diferentes tipos de entregas según tu ubicación y la
            velocidad que elijas en la forma de envío.
          </p>
        </details>

        <details>
          <summary>
            <h4>Medios de Pago</h4>
            <span className={style.materialOutlined}>-</span>
          </summary>
          <p>
            Aceptamos todos los medios de pago: 
            <li>Transferencia Bancaria</li> 
            <li>Tarjetas de Crédito </li>
            <li>Mercado Pago</li>
           <li>Contra Entrega</li> 
          </p>
        </details>

        <details>
          <summary>
            <h4>¿Tienen Stock?</h4>
            <span className={style.materialOutlined}>-</span>
          </summary>
          <p>
          Todos los productos y el stock están publicados online. Los precios son finales.
          </p>
        </details>

        <details>
          <summary>
            <h4>Envíos a Todo el País</h4>
            <span className={style.materialOutlined}>-</span>
          </summary>
          <p>
          Llegamos a todo el país mediante nuestro sistema de entregas.
          </p>
        </details>

        <details>
          <summary>
            <h4>¿Tienen Local?</h4>
            <span className={style.materialOutlined}>-</span>
          </summary>
          <p>
          Tenemos un punto de entrega en Avenida Siempreviva 123, Springfield, Buenos Aires, Argentina. Pero la venta tiene que ser a través del comercio electrónico.
          </p>
        </details>
      </div>
    </div>
  );
};