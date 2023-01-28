import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Corusel from "./../../ui/Corusel";
// import Warant from "./../Warranty";
import "./style.scss";
import { useState, useEffect } from "react";
const index = () => {
  return (
    <>
      <div className="recomendation d-flex flex-column w-100 justify-content-between align-items-center">
        <div className="recomendation__top py-1 d-flex justify-content-between align-items-center w-100">
          <h3 className="recomendation__title">Наши рекомендации</h3>
          {/* <div className="d-flex justify-content-between align-items-center gap-3">
            <BsArrowLeft />
            <BsArrowRight />
          </div> */}
        </div>
      </div>
      <div className="recomendation__card w-100 ">
        <Corusel />
      </div>
    </>
  );
};

export default index;
