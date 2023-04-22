import style from "./index.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assents/Smonkey.svg";



const Footer = () => {
  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.footerAddr}>
          <h1 className={style.footerLogo}>SOMETHING</h1>          

          <address> Si tenés alguna duda:
            <a className={style.footerBtn} href="mailto:example@gmail.com">
              Contactanos
            </a>
          </address>
        </div>

        <ul className={style.footerNav}>
          <li className={style.navItem}>
            <h2 className={style.navTitle}>Nosotros</h2>

            <ul className={style.navUl}>
              <li>
                <a href="/sobre-nosotros">Quienes Somos</a>
              </li>
            </ul>
          </li>

          <li className={style.navItemE}>
            <h2 className={style.navTitle}>Servicios</h2>

            <ul className={style.navUlE}>
              <li>
                <a href="#">Catálogo</a>
              </li>
            </ul>
          </li>

          <li className={style.navItem}>
            <h2 className={style.navTitle}>Legales</h2>

            <ul className={style.navUl}>
              <li>
                <a href="/terminosycondiciones">Términos y Condiciones</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className={style.footerDivider} />
        <div className={style.footerEnd}>
          <ul className={style.footerLinks}>
            <p>&copy; 2019 Something. All rights reserved.</p>
            <p>
              Made with <span className={style.heart}>♥</span> remotely from
              Arguentina
            </p>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
