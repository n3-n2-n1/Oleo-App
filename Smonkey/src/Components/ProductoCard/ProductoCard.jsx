import React from 'react'
import style from "./index.module.css"
import img from "../../Assents/Frame1.png"
import { Link } from "react-router-dom";

const products = [
  { titulo: 'Sustrato Growers Super Soil (25lt.)',  precio: 120, imgUrl: `${img}` },
  { titulo: 'Top Crop - Veg 250mL.',  precio: 320, imgUrl: `${img}` },
  { titulo: 'Clipper - Lighter',  precio: 420, imgUrl: `${img}` },
  { titulo: 'Skogbio - Alga Delta Bioestimulante 100mL.',  precio: 1220, imgUrl: `${img}` },
  { titulo: 'Raw - Challenge Cone - 33oz.',  precio: 1520, imgUrl: `${img}` },
  { titulo: 'Forestal - Bandeja 4090 (40 celdas, 90cc)',  precio: 1120, imgUrl: `${img}` },
];


export const ProductoCard = () => {
  return (
    <div className={style.container0}>

    <div className={style.container}>
      <h1>New</h1>
      <div className={style.PageWrapper}>
        <div className={style.PageInner}>
          <div className={style.row}>
            {products.map((product, index) => (
              <div key={index} className={style.elWrapper}>
                <div className={style.boxUp}>
                  <img className={style.img} src={product.imgUrl} alt=""/>
                  <div className={style.imgInfo}>
                    <div className={style.infoInner}>
                      <span className={style.pName}>{product.name}</span>
                      
                    </div>
                  </div>
                </div>
  
                <div className={style.boxDown}>
                  <div className={style.hBg}>
                    <div className={style.hBgInner}></div>
                  </div>
  
                  <a className={style.cart} href="#">
                    <span className={style.price}>${product.precio}</span>
                    <span className={style.add}>
                    <Link to={`/detalle/:id`}>
                      <span className={style.txt}>VER MÁS</span>
                      </Link>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            </div>
  );
};