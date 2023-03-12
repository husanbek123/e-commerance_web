import React, { useContext } from "react";
import d from "../Karzina/karzina.module.scss";
import { KarzinaContext } from "../../components/context/karzina";

function Karzina() {
  const { karzina } = useContext(KarzinaContext);

  console.log(karzina);
  return (
    <div>
      <h1>Karzinka page</h1>
    </div>
  );
}
export default Karzina;
