import React from "react";
import "./style.scss";
import Img from "./../../assets/images/im.jpg"
import {context} from "./../../context/context"
import { IoMdClose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { useState, useContext } from "react";
const index = ({ show}) => {
// const cart = useContext(context)
  // console.log(cart)/;
  return (
    <>
      <div className={`layer-cart ${show ? "show" : "hide"}`}>
        <div className="cart">
          <div className="cart__head d-flex justify-content-between flex-column align-items-end">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h2 className="cart__title my-2">В корзине 0 товара</h2>
              {/* <IoMdClose className="close-cart mx-2" /> */}
            </div>
            {/* <BsArrowRight
              className="close-arrow"
            /> */}
            
          </div>
          <div className="cart__body w-100 d-flex p-4 flex-column align-items-start justify-content-between">
            <div className="cart__body--card w-100 gap-2  d-flex justify-content-between align-items-start">
              <img src={Img} alt="images" className="product__img" />
              {/* <IoMdClose/> */}
              <div className="d-flex flex-column gap-2 align-items-end justify-content-between">
                <h3 className="order__title m-0">{"cate"}</h3>
                <button className="btn d-flex justify-content-between flex-row align-items-center gap-1 fs-6 fw-bold">
                  <IoMdClose className="close-cart" />
                  Remove
                </button>
              </div>
              <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
                <span className="fw-bold"> {"0"} $</span>
                <div className="count d-flex flex-row align-items-center justify-content-between">
                  <button className="btn btn-white"> - </button>
                  <p className=" border-1 rounded-0 p-2 m-0">0</p>
                  <button className="btn btn-white">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__footer w-100 p-2 gap-2 d-flex align-items-end flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h3 className="cart__price">Итого:</h3>
              <p className="p-0 m-0">0 usd</p>
            </div>
            <div>
              <button className="btn btn-warning">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
