import React from "react";
import { useParams } from "react-router-dom";
import { useDataFetch } from "../../components/hooks/getData";
import c from "../SinglBlog/singlBlog.module.scss"

function SinglBlog() {
  const { id } = useParams();

  const singlBlogProduct = useDataFetch(["products", id], `/products/${id}`);
  console.log(singlBlogProduct.data, "products");

  return (
    <div className={c.sBlog}>
      <div className={c.wrap}>
        <div className={c.img}>
          <img src="https://picsum.photos/300/350" alt="img" />
        </div>
        <div className={c.text}>
          <p><span>Id:</span>{singlBlogProduct?.data?.id}</p>
          <p><span>Color:</span>{singlBlogProduct?.data?.color}</p>
          <p><span>Size:</span>{singlBlogProduct?.data?.size}</p>
          <p><span>Price:</span>{singlBlogProduct?.data?.price}</p>
          <p><span>Name:</span>{singlBlogProduct?.data?.name_En}</p>
        </div>
      </div>
      
      {/* <img src={singlBlogProduct?.data?.Category?.photoId} alt="" /> */}
      
    </div>
  );
}

export default SinglBlog;
