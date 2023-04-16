import style from "./index.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assents/Smonkey.svg";

const Footer = () => {
  return (
    <div className={style.container}>

      <footer className={style.footer}>
        <div className={style.footerAddr}>
          <h1 className={style.footerLogo}>Something</h1>

          <h2>Contact</h2>

          <address>
            5534 Somewhere In. The World 22193-10212

            <a className={style.footerBtn} href="mailto:example@gmail.com">Email Us</a>
          </address>
        </div>

        <ul className={style.footerNav}>
          <li className={style.navItem}>
            <h2 className={style.navTitle}>Media</h2>

            <ul className={style.navUl}>
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className={style.navItemE}>
            <h2 className={style.navTitle}>Technology</h2>

            <ul className={style.navUlE}>
              <li>
                <a href="#">Hardware Design</a>
              </li>

              <li>
                <a href="#">Software Design</a>
              </li>

              <li>
                <a href="#">Digital Signage</a>
              </li>

              <li>
                <a href="#">Automation</a>
              </li>

              <li>
                <a href="#">Artificial Intelligence</a>
              </li>

              <li>
                <a href="#">IoT</a>
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
