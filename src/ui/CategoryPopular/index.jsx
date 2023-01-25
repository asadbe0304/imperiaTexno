import React, { useRef, useState, useEffect, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiHeart } from "react-icons/bi";
// import { context } from "./../../context/context";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "./../Card/Card";
// import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  //   const [data, setData] = useState([]);
  //   const [item, setItem] = useState([]);
  //   const handleClick = (e) => {
  //     item.push(e);
  //     console.log(item);
  //   };
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((res) => res.json())
  //       .then((json) => setData(json));
  //   }, []);
  return (
    <>
      <div className="container">
        <div className="category-popular-top">
          <h3 className="fw-bold">Популярные категории</h3>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          // slidesPerGroup={4}
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: false,
          }}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper px-4 d-flex justify-content-center py-5 gap-1 align-items-center"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>

          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          {/* {data.length > 0 ? (
            data.map((e) => {
              return (
                <SwiperSlide
                  className="d-flex justify-content-center border rounded-2 swipe-card flex-column align-items-center p-4"
                  key={e.id}
                >
                  <img src={e.image} alt="images" className="imgcard mb-4" />
                  <div className="card__body">
                    <div className="card__body--top d-flex gap-3 justify-content-between align-items-center w-100">
                      <h4 className="fs-6 fw-medium my-3">Art televison</h4>
                      <span className="text-success nalichka fw-bold">
                        В наличии
                        </span>
                    </div>
                    <h4 className="card-title">{e.category}</h4>
                    <div className="card__footer w-100 d-flex justify-content-between align-items-center gap-2">
                      <h5 className="card__footer--title m-0">{e.price} $</h5>
                      <div className="bg-warning px-2 py-1 rounded-2">
                      <AiOutlineShoppingCart
                          className="shop-cart"
                          onClick={() => handleClick(e)}
                        />
                        </div>
                        <BiHeart className="position-absolute like-heart" />
                    </div>
                  </div>
                </SwiperSlide>
                );
            })
          ) : (
              <div className="lds-ellipsis w-100">
              <div></div>
              <div></div>
              <div></div>
              </div>
            )} */}
        </Swiper>
      </div>
    </>
  );
}
