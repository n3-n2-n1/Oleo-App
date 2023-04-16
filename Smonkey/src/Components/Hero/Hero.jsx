import style from "./index.module.css";
import main_img from "../../Assents/Frame1.png"



export function Hero() {
  return <div className={style.container}>
    <div className={style.mScroll}>
      <div className={style.mScrollTitle}>
        <div>
          <h1>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">  </a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>

            <a href="https://dribbble.com/JulianoF">PUFFPASS </a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">  </a>

            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS </a>
            <a href="https://dribbble.com/JulianoF">  </a>

            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>

            <a href="https://dribbble.com/JulianoF">  </a>

            <a href="https://dribbble.com/JulianoF">PUFFPASS </a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">  </a>

            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS </a>

            <a href="https://dribbble.com/JulianoF">  </a>


            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS </a>
          </h1>
          <h1>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
            <a href="https://dribbble.com/JulianoF">PUFFPASS</a>
          </h1>
        </div>
      </div>
    </div>

    <div className={style.productWrapper}>
      <div className={style.product}>
        <section className={style.imgSection}>
          <div className={style.productImage}>
            <img src={main_img}/>
          </div>
        </section>
        <section className={style.infoSection}>
          <div className={style.infoWrapper}>
            <div className={style.infoTitle}>
              Encontra lo que te gusta!
            </div>
            <div className={style.infoDescWrapper}>
              <div className={style.infoDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className={style.actionBtn}>
              <input type="submit" value="Explore" />
            </div>
          </div>
        </section>
      </div>
    </div>
   


  </div>;


};
