import style from "./index.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assents/Smonkey.svg";

const Footer = () => {
  return (
    <div className={style.container}>

      <footer className={style.footer}>
        <div className={style.footerAddr}>
          <h1 className={style.footerLogo}>Oleo</h1>

          <h2>Contact</h2>

          <address>
            Palermo Hollywood, Buenos Aires, Argentina

            <a className={style.footerBtn} href="krystalloquartz@gmail.com">Email Us</a>
          </address>
        </div>

        <ul className={style.footerNav}>
          <li className={style.navItem}>
            <h2 className={style.navTitle}>Media</h2>

            <ul className={style.navUl}>
              <li>
                <a href="#">Categorías</a>
              </li>

              <li>
                <a href="#">Parafernalia</a>
              </li>

              <li>
                <a href="#">Nosotros</a>
              </li>
            </ul>
          </li>

          <li className={style.navItemE}>
            <h2 className={style.navTitle}>Contactanos</h2>

            <ul className={style.navUlE}>
              <li>
                <a href="#">Preguntas Frecuentes</a>
              </li>

            </ul>
          </li>

          <li className={style.navItem}>
            <h2 className={style.navTitle}>Legal</h2>

            <ul className={style.navUl}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className={style.legal}>
          <p>&copy; 2019 Something. All rights reserved.</p>

          <div className={style.legalLinks}>
            <span>Made with <span className={style.heart}>♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
