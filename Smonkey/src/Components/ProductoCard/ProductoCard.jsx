import React from 'react'
import style from "./index.module.css"
import img from "../../Assents/Frame1.png"

const products = [
  { name: 'I feel like Pablo', company: 'Yeezy', sizes: ['S', 'M', 'L', 'XL'], price: 120, imgUrl: `${img}` },
  { name: "The Iconic", company: "Nike", sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"], price: 99.99, imgUrl: `${img}` },
  { name: "The Essential", company: "Adidas", sizes: ["XS", "S", "M", "L", "XL"], price: 49.99, imgUrl: `${img}` },
  { name: "The Classic", company: "Converse", sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"], price: 59.99, imgUrl: `${img}` },
  { name: "The Ultimate", company: "Under Armour", sizes: ["XS", "S", "M", "L", "XL"], price: 79.99, imgUrl: `${img}` },
  { name: "The Comfortable", company: "New Balance", sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"], price: 69.99, imgUrl: `${img}` },
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
                      <span className={style.pCompany}>{product.company}</span>
                    </div>
                    <div className={style.aSize}>Available sizes: <span className={style.size}>{product.sizes.join(', ')}</span></div>
                  </div>
                </div>
  
                <div className={style.boxDown}>
                  <div className={style.hBg}>
                    <div className={style.hBgInner}></div>
                  </div>
  
                  <a className={style.cart} href="#">
                    <span className={style.price}>{product.price}</span>
                    <span className={style.add}>
                      <span className={style.txt}>Add to cart</span>
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