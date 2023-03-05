import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { TemaContext } from "../context/temaContext";
import { useContext } from "react";
import { KarzinaContext } from "../context/karzina";

function Layout({ mode, children }) {
  const { tema, setTema } = useContext(TemaContext);
  const { karzina, setKarzina } = useContext(KarzinaContext);
  console.log(tema);
  return (
    <div className={mode == "light" ? "dark" : "light"}>
      <Navbar karzina={karzina} tema={tema} mode={mode} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
