import React from "react";
import styles from "./index.module.scss";
import { useGetData } from "../../hooks/useQueryHook";
import Product from "../../components/Product";
import useMyStore from "../../components/context/Store";

function Products() {
  let { currentLang } = useMyStore((state) => state);
  let { data: products } = useGetData(["products"], "/products");

  return (
    <div className={styles.products}>
      {products?.data?.map((item) => (
        <Product
          desc={item[`description_${currentLang}`]}
          img={item?.photo?.path}
          price={item?.price}
          title={item[`name_${currentLang}`]}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Products;
