import style from "./index.module.css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import  "./index.css";
import 'swiper/css'

export function Ofertas() {
  const ofertaimg = ['https://res.cloudinary.com/dh9c97uci/image/upload/v1674523326/Smonkey/products/Prueba3_bpvg6s.png', 'https://res.cloudinary.com/dh9c97uci/image/upload/v1674523321/Smonkey/products/Prueba4_qg4gu1.png','https://res.cloudinary.com/dh9c97uci/image/upload/v1674523321/Smonkey/products/part2png_s8quem.png']
  return (
    <div className={style.container} >
      <div className={style.swiperContainer}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.50": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.25": {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            "@1.50": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@1.75": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
          }}
        >
          {ofertaimg?.map((p, i) => (
            <SwiperSlide className='swiper-slice' key={i}>
              <img className={style.ofertaimg} src={p} alt={"oferta-imagenes"+i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
);
};
