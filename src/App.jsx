import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import { context } from "./context/context";
import { useContext, useState, useEffect } from "react";
import cart from "./ui/Cart";
import Footer from "./components/Footer";
// import item from "./ui/Corusel";
import Main from "./components/Main/index";

const App = () => {
  
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150
        ? setSticky("sticky")
        : setSticky("");
    }
  }
  // const item = useContext(context)
  // const show = useContext(context);
  return (
    <>
      <context.Provider value={{ cart }}>
        <div className={`app-header ${sticky}`}>
        <Header />
        <Navbar />
        </div>
        <main className="site-main">
          <Main />
        </main>
        <Footer />
      </context.Provider>
    </>
  );
};

export default App;
