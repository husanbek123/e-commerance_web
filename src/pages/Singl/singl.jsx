import React from "react";
import c from './singl.module.scss';
import useQueryHook from "../../hooks/useQueryHook";
import { useParams } from "react-router-dom";


function Singl() {
  const param =useParams();
  const { data } = useQueryHook({ url: `/products/category/${param.id}` });
  const mydata = data?.data || [];
  console.log(param);

  return (
    <div className={c.singlecateg}>
      {/* <h1>Single page</h1> */}
      {mydata?.data?.map((e, i) => {
        return (
          <div className={c.card}>
              <div className={c.card_img}>
                  <img src={"http://3.19.30.204/upload/"+ e?.photoId} alt="" />
              </div>
              <h3>{e?.name_Uz}</h3>
              <div className={c.price}>
                  <button>Buy now</button>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default Singl
