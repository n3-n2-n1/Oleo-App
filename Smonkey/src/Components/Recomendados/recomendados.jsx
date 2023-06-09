import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../../Components/Card/Card";
import  "./index.css";
import 'swiper/css'
import { useSelector } from "react-redux";


function Recomendados() {
  const products = useSelector(state=> state.products.Productos)
  return (
      <div className='container' >
        <div className='swiperContainer'>
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={2}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@0.50": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.25": {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              "@1.50": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.75": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
            }}
          >
            {products?.slice(0,8).map((p) => (
              <SwiperSlide className='swiper-slice' key={p.title}>
                <Card producto={p} key={p.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='pagination' />
      </div>
  );
}

export default Recomendados;