import React from "react";
import styles from './index.module.scss'
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useQueryHook";
import useMyStore from "../../components/context/Store";
import Category_Card from "../../components/category_card";
import Product from "../../components/Product";

function Category() {

  let {currentLang} = useMyStore((state) => state)
  let {id} = useParams()
  console.log(id);
  let {data: categories} = useGetData(['categories'], '/category')
  let {data: products} = useGetData(['products'], '/products')
  let CurrentCateg = products?.data?.filter(item => item.categoryId == id)
  

  return (
    <div className={styles.category}>
      {
        CurrentCateg?.length > 0 ? CurrentCateg.map(item => (
          <Product 
            img={item?.photo?.path}
            title={item[`name_${currentLang}`]}
            desc={item[`description_${currentLang}`]}
            price={item.price}
            id={item.id}
          />
        ))
        : 
        <h2>No Products</h2>
      }
    </div>
  );
}

export default Category;
