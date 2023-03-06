import React from "react";
import { Link } from "react-router-dom";
import d from "../Karzina/karzina.module.scss"

function Karzina({ blog }) {
  return (
    <div className={d.kar}>
      <div className={d.cars}>
        {blog?.map((p) => (
          <div className={d.car}>
            
            <img src="https://picsum.photos/300/350" alt="#" />
            <p>{p.id}</p>
            <p>
              <span>Color:</span>
              {p?.color}
            </p>
            <p>
              <span>price:</span>
              {p?.price}
            </p>
            <p>
              <span>size:</span>
              {p?.size}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
export default Karzina;
