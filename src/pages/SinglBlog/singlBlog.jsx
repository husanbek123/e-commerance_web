import React from "react";
import { useParams } from "react-router-dom";
import useMyStore from "../../components/context/Store";
import { useDataFetch } from "../../components/hooks/getData";
import { useGetData } from "../../hooks/useQueryHook";
import c from "../SinglBlog/singlBlog.module.scss"

function SinglBlog() {
  const { id } = useParams();
  let {currentLang} = useMyStore((state) => state)
  const singlBlogProduct = useDataFetch(["products", id], `/products/${id}`);
  // console.log(singlBlogProduct.data, "products");
  // console.log(singlBlogProduct);
  let {data: products, isLoading} = useGetData(['products'], '/products')
  let currentProduct = products?.data?.filter(item => item.id == singlBlogProduct?.data?.id)
  console.log(currentProduct, "2222222222222");

  return (
    <div className={c.sBlog}>
      <div className={c.wrap}>
        <div className={c.img}>
          {
            isLoading ? "Loading" : <img src={`http://3.19.30.204/upload/${currentProduct?.photo?.path}`} alt="img" />
          }
        </div>
        <div className={c.text}>
          <p><span>Name:</span>{products?.data?.find(item => item.id == id)[`name_${currentLang}`]}</p>
          <p><span>Id:</span>{singlBlogProduct?.data?.id}</p>
          <p><span>Color:</span>{singlBlogProduct?.data?.color}</p>
          <p><span>Size:</span>{singlBlogProduct?.data?.size}</p>
          <p><span>Price:</span>{singlBlogProduct?.data?.price}</p>
        </div>
      </div>
      
      {/* <img src={singlBlogProduct?.data?.Category?.photoId} alt="" /> */}
      
    </div>
  );
}

export default SinglBlog;
