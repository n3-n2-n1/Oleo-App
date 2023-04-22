import React, { useState } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { productos } from "../../Assents/BASEFAKE";

export const ProductoCard = ({ product }) => {
  console.log(product);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const startIndex = (currentPage - 1) * pageSize;
  const selectedProducts = productos.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(productos.length / pageSize);

  return (
    <div className={style.container}>
      <h1>New</h1>
      <div className={style.PageWrapper}>
        <div className={style.PageInner}>
          <div className={style.row}>
            {selectedProducts.map((product, index) => (
              <div key={index} className={style.elWrapper}>
                <div className={style.boxUp}>
                  <img className={style.img} src={product.imagen} alt="" />
                  <div className={style.imgInfo}>
                    <div className={style.infoInner}>
                      <span className={style.pName}>{product.titulo}</span>
                    </div>
                  </div>
                </div>

                <div className={style.boxDown}>
                  <div className={style.hBg}>
                    <div className={style.hBgInner}></div>
                  </div>

                  <span className={style.cart} href="#">
                    <span className={style.price}>${product.precio}</span>
                    <span className={style.add}>
                      <Link to={`/detalle/${product.id}`}>
                        <span className={style.txt}>VER MÁS</span>
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className={style.pagination}>
            <ul className={style.ul}>
              {Array.from({ length: pageCount }).map((_, index) => (
                <li className={style.list} key={index}>
                  <button
                    className={style.button}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
