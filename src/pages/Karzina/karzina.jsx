import React, { useContext, useState } from "react";
import d from "../Karzina/karzina.module.scss";
import { KarzinaContext } from "../../components/context/karzina";

function Karzina() {
  const { karzina, setKarzina } = useContext(KarzinaContext);

  // const [data, setData] = useState();
  // const filterData = karzina.filter(() => {
  //   (item) => item.id != id;
  // });

  console.log(karzina, "karzina data");
  function DeleteItem(uid) {
    let arr = karzina.filter(item => item.uid != uid)
    setKarzina(arr)
  }
  return (
    <div>
      <h1>Karzinka page</h1>
      <div className={d.karzina}>
        {karzina.map((e, i) => (
          <div className={d.karzina__card}>
            <h4>{e.description_En}</h4>
            <h4>{e.gender}</h4>
            <p>{e.color}</p>
            <button onClick={() => DeleteItem(e?.uid)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Karzina;
