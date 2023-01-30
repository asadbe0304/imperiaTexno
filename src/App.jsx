import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import Login from "./pages/Login";
import Sign from "./pages/Register/index";
import { context } from "./context/context";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import item from "./ui/Corusel";
import Category from "./pages/Category/index";
import Main from "./components/Main/index";
import { BiCategory } from "react-icons/bi";

const App = () => {
  const [data, setData] = useState([]);
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setSticky("sticky") : setSticky("");
    }
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);
  const item = useContext(context)
  // const show = useContext(context);
  return (
    <>
      <context.Provider value={data}>
        <div className={`app-header ${sticky}`}>
          <Header />
          <Navbar />
        </div>
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/:id" element={<Category />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="/sign" element={<Sign />} />
          </Routes>
        </main>
        <Footer />
      </context.Provider>
    </>
  );
};

export default App;
