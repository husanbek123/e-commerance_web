import React from "react";
import Navbar from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { TemaContext } from "../context/temaContext";
import { useContext } from "react";
import { KarzinaContext } from "../context/karzina";
function Layout({ karzina, mode, children }) {
  const { tema, setTema } = useContext(TemaContext);
  console.log(tema);
  return (
    <div className={mode == "light" ? "dark" : "light"}>
      <Navbar karzina={karzina} tema={tema} mode={mode} />
      <div className="row">
        <div className="rowbox">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
