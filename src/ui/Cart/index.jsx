import React from "react";
import "./style.scss";
import Img from "./../../assets/images/im.jpg";
import Cart from "./../Corusel/index";
import { context } from "../../context/context";
// import {nameItem} from "./../Corusel/index"
import { IoMdClose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { useState, useContext, useEffect } from "react";
const index = ({ show }) => {
  // const shows = useContext(context)
  const item = useContext(context);
  useEffect(() => {
    console.log(item);
  }, []);
  console.log(item);
  return (
    <>
      <div className={`layer-cart ${show ? "show" : "hide"}`}>
        <div className="cart">
          <div className="cart__head d-flex justify-content-between flex-column align-items-end">
            <div className="d-flex justify-content-between align-items-center w-100">
              <h2 className="cart__title my-2">В корзине {item.length} товара</h2>
              {/* <IoMdClose className="close-cart mx-2" /> */}
            </div>
            {/* <BsArrowRight
              className="close-arrow"
            /> */}
          </div>
          <div className="cart__body w-100 d-flex p-4 flex-column align-items-start justify-content-between">
            {item.length > 0
              ? item.map((e) => {
                  return (
                    <div key={e.id} className="cart__body--card w-100 gap-2  d-flex justify-content-between align-items-start">
                      <img src={e.image} alt="images" className="product__img" />
                      {/* <IoMdClose/> */}
                      <div className="d-flex  flex-column gap-2 align-items-start justify-content-between">
                        <h3 className="order__title m-0">Card Title</h3>
                        <button className="btn btn-danger d-flex justify-content-between flex-row align-items-center fw-medium p-1">
                          {/* <IoMdClose className="close-cart" /> */}
                          Remove
                        </button>
                      </div>
                      <div className="d-flex flex-column gap-2 align-items-center justify-content-between">
                        <span className="fw-bold"> {"0"} $</span>
                        <div className="count d-flex flex-row align-items-center justify-content-between">
                          <button className="btn btn-warning  fw-bold">
                            {" "}
                            -{" "}
                          </button>
                          <p className=" border-1 rounded-0 p-2 m-0">0</p>
                          <button className="btn btn-success fw-bold">+</button>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "not"}
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
