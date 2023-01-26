import React, { useRef, useState, useEffect, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiHeart } from "react-icons/bi";
import { context } from "./../../context/context";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Img from "./../../assets/images/im.jpg";
import "./style.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  const handleClick = (e) => {
    item.push(e);
    console.log(item);
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={4}
          loop={false}
          loopFillGroupWithBlank={false}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
              slidesPerGroup: 2
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
              slidesPerGroup: 4
            },
          }}
        
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper px-4 d-flex justify-content-center py-5 gap-1 align-items-center"
        >
          {data.length > 0 ? (
            data.map((e) => {
              return (
                <SwiperSlide
                  // item={item}
                  className="d-flex justify-content-center border rounded-2 swipe-card flex-column align-items-center p-4"
                  key={e.id}
                >
                  {/* <div className="card rounded-0 p-0 align-items-center py-4 position-relative"> */}
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
                  {/* </div>   */}
                </SwiperSlide>
              );
            })
          ) : (
            <div className="lds-ellipsis w-100">
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </Swiper>
    </>
  );
}
