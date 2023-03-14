import React from "react";
import { useParams } from "react-router-dom";
import useMyStore from "../../components/context/Store";
import { useDataFetch } from "../../components/hooks/getData";
import { useGetData } from "../../hooks/useQueryHook";
import c from "../SinglBlog/singlBlog.module.scss";
import { KarzinaContext } from "../../components/context/karzina";
import { useContext } from "react";
import { Loader } from "../../components/Loader";

function SinglBlog() {
  const { id } = useParams();
  let { currentLang } = useMyStore((state) => state);
  const singlBlogProduct = useDataFetch(["products", id], `/products/${id}`);
  let { data: products, isLoading } = useGetData(["products"], "/products");

  let currentProduct = products?.data?.filter(
    (item) => item.id == singlBlogProduct?.data?.id
  );
  const { karzina, setKarzina } = useContext(KarzinaContext);

  console.log(singlBlogProduct.data, "information");

  return (
    <div className={c.blog}>
      <div className={c.blog__wrapper}>
        <div className={c.blog__imgbox}>
          {isLoading ? (
            <Loader />
          ) : (
            <img
              className={c.blog__img}
              src={`http://3.19.30.204/upload/${currentProduct[0]?.photo?.path}`}
              alt="img"
            />
          )}
        </div>
        <div className={c.blog__info}>
          <p className={c.blog__text}>
            <span>Name:</span>
            {products?.data?.find((item) => item.id == id)[`name_${currentLang}`]}
          </p>
          <p className={c.blog__text}>
            <span>Size:</span>
            {singlBlogProduct?.data?.size}
          </p>
          <p className={c.blog__text}>
            <span>Gender :</span> {singlBlogProduct?.data?.gender}
          </p>
          <div className={c.blog__detel}>
            <p className={c.blog__text}>
              <span>Price:</span>
              {singlBlogProduct?.data?.price}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span className={c.blog__text}>Color</span>
              <p
                className={c.blog__color}
                style={{ backgroundColor: `${singlBlogProduct?.data?.color}` }}
              ></p>
            </div>
          </div>
          <button
            className={c.blog__btn}
            onClick={() => setKarzina((e) => [...e, {
              ...singlBlogProduct?.data,
              uid: Math.round(Math.random() * 10000) 
            }])}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglBlog;
