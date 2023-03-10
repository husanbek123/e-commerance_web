import React from "react";
import { Link } from "react-router-dom";
import { useDataFetch } from "../../components/hooks/getData";
import c from "../Blog/blog.module.scss";
import { Audio } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import { useGetData } from "../../hooks/useQueryHook";
import { Sidebar } from "../../components/Sidebar";

function Blog({ set }) {
  const [param, setParam] = useSearchParams();

  const categData = param.get("categ");

  const { data } = useGetData(["product"], `products/category/${categData}`);
  return (
    <div className={c.wrapper}>
      <Sidebar />
      <div className={c.blog}>
        <div className={c.wrapper}>
          {data?.data?.map((w) => (
            <div className={c.card}>
              <img src={w.photoId} alt="rasm" />
              {console.log(data, "vgbhlskjn")}
              <p>
                <span>Color:</span>
                {w?.color}
              </p>
              <p>
                <span>price:</span>
                {w?.price}
              </p>
              <p>
                <span>size:</span>
                {w?.size}
              </p>
              <Link to={`/blog/${w.id}`}>more</Link>
              <button onClick={() => set((e) => [...e, w])}>Buy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
