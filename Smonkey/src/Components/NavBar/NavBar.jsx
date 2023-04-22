import style from "./index.module.css";
import { Form, Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assents/logo2c.svg";
import carrito from "../../Assents/Shoppingcart.png";
import menu from "../../Assents/menu.svg";
import closemenu from "../../Assents/closemenu.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [clicked, setClicked] = useState(true);
  const cart = useSelector((state) => state.cart.cartItems);
  const menuopen = () => {
    setClicked(!clicked);
  };
  const Category = useSelector((state) => state.products.Categorias);


  
  return (
    <div className={style.header}>
      <div className={style.logo}>Company Title</div>
      <div className={style.menu}>
        <a href="/catalogo" className={style.link}>
          <div className={style.link}>Catalogo</div>
          <div className={style.bar}></div>
        </a>
        <a href="/faq" className={style.link}>
          <div className={style.link}>Preguntas Frecuentes</div>
          <div className={style.bar}></div>
        </a>
        <a href="/carrito" className={style.link}>
          <div className={style.link}>Carrito</div>
          <div className={style.bar}></div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;