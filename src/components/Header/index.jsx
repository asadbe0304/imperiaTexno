import React, { useContext } from "react";
import "./style.scss";
import Img from "./../../assets/images/logo.png";
import { FiNavigation, FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiAdminFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { Badge } from "react-bootstrap";
import Cart from "../../ui/Cart/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const index = () => {
  const [show, setShow] = useState(false);

  return (
    <>
        <header className="w-100 bg-white">
          <div className="container">
            <Cart show={show}/>
            <div className="header w-100 py-2 d-flex justify-content-between align-items-center">
              <div className="head d-flex justify-content-center align-items-center gap-4">
                <div className="header__logo">
                  <a href="./" className="header__logo--link">
                    <img
                      src={Img}
                      className="header__logo--img"
                      alt="images logo"
                    />
                  </a>
                </div>
                <div className="header__location d-flex flex-column align-items-start navigation">
                  <div className="d-flex justify-content-center align-items-center gap-1 fs-6 text-black">
                    <FiNavigation className="text-danger navi" />
                    <p className="m-0">Ваш город</p>
                  </div>
                  Sankt peterburg
                </div>
              </div>
              <div className="header__search d-flex justify-content-center align-itmes-center">
                {/* search bar */}
                <InputGroup className="mb-3 search-bar">
                  <Form.Control
                    placeholder="Search Products"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    className="bg-warning border-0 rounded-0"
                  >
                    <BsSearch className="text-white fw-bold" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <InputGroup className=" bg-white mobile__search--bar position-absolute top-0 left-0 right-0 $zindex-modal">
                <Form.Control
                  placeholder="Search Products"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-warning border-0 rounded-0"
                >
                  <BsSearch className="text-white fw-bold" />
                </InputGroup.Text>
              </InputGroup>

              <div className="header__call">
                <a
                  href="tel:++998932502719"
                  className="fw-bold header__call--tel text-black"
                >
                  +7 (812) 200-49-00
                </a>
                <div className="d-flex flex-column align-items-start justify-content-center">
                  <p className="m-0 p-0 text-secondary call__text">
                    +7 (800) 777-04-02
                  </p>
                  <p className="m-0 p-0 text-secondary call__text">
                    пн-пт, 10:00-19:00
                  </p>
                </div>
              </div>
              <div className="header__inner align-items-center d-flex justify-content-between gap-3">
                {/* mobile search bar */}
                <div className="mobile-search-btn m-0">
                  <InputGroup.Text
                    id="basic-addon1"
                    className="bg-warning border-0 rounded-2 m-0"
                  >
                    <BsSearch className="text-white fw-bold" />
                  </InputGroup.Text>
                </div>
                <div className="header__like--order d-flex justify-content between gap-3">
                  <div className="admin">
                    <RiAdminFill className="admin__icon" />
                  </div>
                  <div className="like">
                    <FcLike className="like__icon" />
                  </div>
                </div>
                <div className="header__cart position-relative gap-2 d-flex align-items-center justify-content-between">
                  <FiShoppingCart
                    onClick={() => setShow((e) => !e)}
                    className="header__shopping--cart pointer"
                  />
                  <Badge bg="danger" className=" badge">
                    0
                  </Badge>
                  <p className="p-0 mx-2 my-0 order__text">
                    В корзине нет товаров
                  </p>
                  <GiHamburgerMenu className="Hambur" />
                  <IoMdClose
                    className={`position-fixed close-arrow ${
                      show ? "show" : "hide"
                    }`}
                    onClick={() => setShow((e) => !e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  );
};

export default index;
