import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Category_Card({ title, img, id }) {
  return (
    <Link to={`/categories/${id}`}>
      <div
        className={styles.category_card}
        style={{
          backgroundImage: `url("http://3.19.30.204/upload/${img}")`,
        }}
      >
        <h4>{title}</h4>
      </div>
    </Link>
  );
}

export default Category_Card;
